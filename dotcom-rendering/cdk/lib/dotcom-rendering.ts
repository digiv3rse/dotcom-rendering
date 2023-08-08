import { join } from 'node:path';
import { GuAutoScalingGroup } from '@guardian/cdk/lib/constructs/autoscaling';
import { GuStack, GuStringParameter } from '@guardian/cdk/lib/constructs/core';
import { GuSecurityGroup, GuVpc } from '@guardian/cdk/lib/constructs/ec2';
import {
	GuAllowPolicy,
	GuInstanceRole,
} from '@guardian/cdk/lib/constructs/iam';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { HealthCheck } from 'aws-cdk-lib/aws-autoscaling';
import { InstanceType, Peer } from 'aws-cdk-lib/aws-ec2';
import { CfnInclude } from 'aws-cdk-lib/cloudformation-include';
import type { DCRProps } from './types';

export class DotcomRendering extends GuStack {
	constructor(scope: App, id: string, props: DCRProps) {
		super(scope, id, props);

		const { app, region, stack, stage } = props;

		const vpcCidrBlock = '10.248.136.0/22';

		// This fetches the VPC using the SSM parameter defined for this account
		// and specifies the CIDR block to use with it here
		const vpc = GuVpc.fromIdParameter(this, 'vpc', {
			vpcCidrBlock,
		});

		const lbSecurityGroup = new GuSecurityGroup(
			this,
			'InternalLoadBalancerSecurityGroup',
			{
				app,
				description:
					'Allows HTTP and HTTPS inbound connections from within the VPC',
				vpc,
				ingresses: [
					{
						range: Peer.ipv4(vpcCidrBlock),
						port: 80,
						description: 'TCP 80 ingress',
					},
					{
						range: Peer.ipv4(vpcCidrBlock),
						port: 443,
						description: 'TCP 443 ingress',
					},
				],
			},
		);

		const instanceSecurityGroup = new GuSecurityGroup(
			this,
			'InstanceSecurityGroup',
			{
				app,
				description: 'rendering instance',
				vpc,
				ingresses: [
					{
						range: Peer.ipv4(vpcCidrBlock),
						port: 9000,
						description: 'TCP 9000 ingress',
					},
				],
			},
		);

		const instanceRole = new GuInstanceRole(this, {
			app: props.app,
			additionalPolicies: [
				//todo: do we need the first two policies? They are provided by default?
				new GuAllowPolicy(this, 'AllowPolicyGetArtifactsBucket', {
					actions: ['s3:GetObject'],
					resources: ['arn:aws:s3:::aws-frontend-artifacts/*'],
				}),
				new GuAllowPolicy(this, 'AllowPolicyCloudwatchLogs', {
					actions: ['cloudwatch:*', 'logs:*'],
					resources: ['*'],
				}),
				new GuAllowPolicy(this, 'AllowPolicyDescribeEc2Autoscaling', {
					actions: [
						'ec2:DescribeTags',
						'ec2:DescribeInstances',
						'autoscaling:DescribeAutoScalingGroups',
						'autoscaling:DescribeAutoScalingInstances',
					],
					resources: ['*'],
				}),
				new GuAllowPolicy(this, 'AllowPolicyDescribeDecryptKms', {
					actions: ['kms:Decrypt', 'kms:DescribeKey'],
					resources: [
						`arn:aws:kms:${this.region}:${this.account}:FrontendConfigKey`,
					],
				}),
				new GuAllowPolicy(this, 'AllowPolicyGetSsmParamsByPath', {
					actions: ['ssm:GetParametersByPath', 'ssm:GetParameter'],
					resources: [
						`arn:aws:ssm:${props.region}:${this.account}:parameter/frontend/*`,
						`arn:aws:ssm:${props.region}:${this.account}:parameter/dotcom/*`,
					],
				}),
			],
		});

		const elkStream = new GuStringParameter(this, 'ELKStreamId', {
			fromSSM: true,
			default: `/${stack}/${stage.toLowerCase()}/logstash.stream.name`,
		});

		const userData = `
		#!/bin/bash -ev

		groupadd frontend
		useradd -r -m -s /usr/bin/nologin -g frontend dotcom-rendering
		usermod -a -G frontend aws-kinesis-agent-user
		cd /home/dotcom-rendering

		aws --region eu-west-1 s3 cp s3://aws-frontend-artifacts/frontend/${stage}/${app}/${app}.zip ./
		unzip -q ${app}.zip -d ${app}

		chown -R dotcom-rendering:frontend ${app}

		cd ${app}

		export TERM=xterm-256color
		export NODE_ENV=production
		export GU_STAGE=${stage}

		mkdir /var/log/dotcom-rendering
		chown -R dotcom-rendering:frontend /var/log/dotcom-rendering

		make start-prod

		/opt/aws-kinesis-agent/configure-aws-kinesis-agent ${region} ${elkStream.valueAsString} /var/log/dotcom-rendering/dotcom-rendering.log
		`;

		const asg = new GuAutoScalingGroup(this, 'AutoscalingGroup', {
			app,
			vpc,
			instanceType: new InstanceType(props.instanceType),
			minimumInstances: props.minCapacity,
			maximumInstances: props.maxCapacity,
			healthCheck: HealthCheck.elb({ grace: Duration.minutes(2) }),
			userData,
			imageRecipe: props.amiRecipe,
			role: instanceRole,
			additionalSecurityGroups: [instanceSecurityGroup],
			vpcSubnets: { subnets: vpc.publicSubnets },
		});

		// ----------------------------------------------------------------- //
		// Temporarily overriding logical IDs during CDK migration
		const reason =
			'Retaining a stateful resource previously defined in YAML';
		this.overrideLogicalId(lbSecurityGroup, {
			logicalId: 'InternalLoadBalancerSecurityGroup',
			reason,
		});
		this.overrideLogicalId(instanceSecurityGroup, {
			logicalId: 'InstanceSecurityGroup',
			reason,
		});
		this.overrideLogicalId(instanceRole, {
			logicalId: 'InstanceRole',
			reason,
		});
		this.overrideLogicalId(asg, {
			logicalId: 'AutoscalingGroup',
			reason,
		});
		// ----------------------------------------------------------------- //

		const yamlTemplateFilePath = join(
			__dirname,
			'../..',
			'cloudformation.yml',
		);

		new CfnInclude(this, 'YamlTemplate', {
			templateFile: yamlTemplateFilePath,
			parameters: {
				InternalLoadBalancerSecurityGroup:
					lbSecurityGroup.securityGroupId,
				InstanceRole: instanceRole.roleName,
				AutoscalingGroup: asg.autoScalingGroupArn,
			},
		});
	}
}

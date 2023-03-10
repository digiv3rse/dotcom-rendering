import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InstanceSize } from 'aws-cdk-lib/aws-ec2';
import { MobileAppsRendering } from './mobile-apps-rendering';

describe('The MobileAppsRendering stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new MobileAppsRendering(app, 'MobileAppsRendering', {
			stack: 'mobile',
			stage: 'TEST',
			recordPrefix: 'mobile-rendering',
			asgCapacity: {
				minimumInstances: 1,
				maximumInstances: 2,
			},
			instanceSize: InstanceSize.SMALL,
			appsRenderingDomain: 'mobile-aws.code.dev-guardianapis.com',
			hostedZoneId: 'TEST-HOSTED-ZONE-ID',
			targetCpuUtilisation: 10,
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});

describe('The MobileAppsRenderingPreview stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new MobileAppsRendering(
			app,
			'MobileAppsRenderingPreview',
			{
				stack: 'mobile-preview',
				stage: 'TEST',
				recordPrefix: 'mobile-preview-rendering',
				asgCapacity: {
					minimumInstances: 1,
					maximumInstances: 2,
				},
				instanceSize: InstanceSize.MICRO,
				appsRenderingDomain: 'mobile-aws.code.dev-guardianapis.com',
				hostedZoneId: 'TEST-HOSTED-ZONE-ID',
				targetCpuUtilisation: 10,
			},
		);
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});

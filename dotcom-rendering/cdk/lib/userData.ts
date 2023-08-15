import type { UserDataProps } from './types';

/**
 * Returns user data configuration for instances in the rendering app
 * @see https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html
 */
export const getUserData = ({
	app,
	region,
	stage,
	elkStreamId,
}: UserDataProps): string => {
	const userData = [
		`#!/bin/bash -ev`,

		`groupadd frontend`,
		`useradd -r -m -s /usr/bin/nologin -g frontend dotcom-rendering`,
		`usermod -a -G frontend aws-kinesis-agent-user`,
		`cd /home/dotcom-rendering`,

		`aws --region eu-west-1 s3 cp s3://aws-frontend-artifacts/frontend/${stage}/${app}/${app}.zip ./`,
		`unzip -q ${app}.zip -d ${app}`,

		`chown -R dotcom-rendering:frontend ${app}`,

		`cd ${app}`,

		`export TERM=xterm-256color`,
		`export NODE_ENV=production`,
		`export GU_STAGE=${stage}`,

		`mkdir /var/log/dotcom-rendering`,
		`chown -R dotcom-rendering:frontend /var/log/dotcom-rendering`,

		`make start-prod`,

		`/opt/aws-kinesis-agent/configure-aws-kinesis-agent ${region} ${elkStreamId} /var/log/dotcom-rendering/dotcom-rendering.log`,
	].join('\n');

	return Buffer.from(userData).toString('base64');
};

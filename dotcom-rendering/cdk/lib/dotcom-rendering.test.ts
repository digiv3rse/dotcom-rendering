import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DotcomRendering } from './dotcom-rendering';

/**
 * These tests make sure that the cloudformation templated being generated by CDK has not deviated
 * from the cloudformation snapshot that has been checked into our repository.
 */

describe('The DotcomRendering stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new DotcomRendering(app, 'DotcomRendering', {
			stack: 'frontend',
			stage: 'TEST',
			app: 'rendering',
			region: 'eu-west-1',
			instanceType: 't4g.micro',
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});

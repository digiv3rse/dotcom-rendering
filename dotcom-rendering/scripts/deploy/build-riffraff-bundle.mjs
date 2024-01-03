import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import * as url from 'node:url';
import cpy from 'cpy';
import execa from 'execa';
import { log, warn } from '../../../scripts/log.js';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const target = path.resolve(dirname, '../..', 'target');

/** This task generates the riff-raff bundle. It creates the following
 * directory layout under target/
 * target
 * ├── build.json
 * ├── riff-raff.yaml
 * ├── ${copyFrontendStatic()}
 * ├── ${copyApp('rendering')}
 * └── ${copyApp('renderi-front')}
 */

/**
 * This method creates a bundle needed to run an app including:
 * - CloudFormation files
 * - .zip artefact comprised of the JS app
 *
 * It generates a folder like this:
 * ├── ${appName}-cfn
 * │   ├── DotcomRendering-${appName}-CODE.template.json
 * │   └── DotcomRendering-${appName}-PROD.template.json
 * └── ${appName}
 *     └── dist
 *         └── ${appName}.zip
 *
 * Except for the instance where appName === 'rendering' due to backwards compatibility
 *
 * @param appName {string}
 **/
const copyApp = (appName) => {
	// GOTCHA: This is a little hack to be backwards compatible with the naming for when this was a single stack app
	const cfnTemplateName = appName === 'rendering' ? '' : `-${appName}`;
	const cfnFolder =
		appName === 'rendering' ? 'frontend-cfn' : `${appName}-cfn`;

	log(` - copying app: ${appName}`);

	log(` - ${appName}: copying cloudformation config`);
	const cfnJob = cpy(
		[
			`cdk.out/DotcomRendering${cfnTemplateName}-CODE.template.json`,
			`cdk.out/DotcomRendering${cfnTemplateName}-PROD.template.json`,
		],
		path.resolve(target, cfnFolder),
	);

	log(` - ${appName}: copying makefile`);
	const makefileJob = cpy(['makefile'], path.resolve(target, appName));

	log(` - ${appName}: copying server dist`);
	const serverDistJob = cpy(
		path.resolve(dirname, '../../dist/**'),
		path.resolve(target, appName, 'dist'),
		{
			nodir: true,
		},
	);

	log(`' - ${appName}: copying scripts`);
	const scriptsJob = cpy(
		path.resolve(dirname, '../../scripts/**'),
		path.resolve(target, appName, 'scripts'),
		{
			nodir: true,
		},
	);

	return [cfnJob, makefileJob, serverDistJob, scriptsJob];
};

/**
 * This method copies the static files over the frontend-static folder, which is then deployed to S3.
 *
 * It generates a folder like this:
 * ├── frontend-static
 *     ├── assets
 *     │   └── **
 *     │       └── *
 *     └── static
 *         ├── frontend
 *         │   └── **
 *         │       └── *
 *         └── etc
 */
const copyFrontendStatic = () => {
	log(' - copying static');
	const staticJob = cpy(
		path.resolve(dirname, '../../src/static/**'),
		path.resolve(target, 'frontend-static', 'static', 'frontend'),
		{
			nodir: true,
		},
	);

	const source = path.resolve(dirname, '../../dist');
	const dest = path.resolve(target, 'frontend-static', 'assets');

	log(' - copying dist => assets');
	const distToAssetsJob = cpy(
		path.resolve(source, '**/*.!(html|json)'),
		dest,
		{
			nodir: true,
		},
	);

	log(' - copying stats => assets');
	const statsToAssetsJob = cpy(
		path.resolve(source, 'client.*', 'stats'),
		path.resolve(dest, 'client.*', 'stats'),
		{
			nodir: true,
		},
	);

	return [staticJob, distToAssetsJob, statsToAssetsJob];
};

const copyRiffRaff = () => {
	log(' - copying riffraff yaml');
	return cpy(['riff-raff.yaml'], target, { cwd: dirname });
};

Promise.all([
	...copyApp('rendering'),
	...copyApp('front-web'),
	...copyFrontendStatic(),
	copyRiffRaff(),
]).catch((err) => {
	warn(err.stack);
	process.exit(1);
});

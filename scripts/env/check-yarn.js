const { promisify } = require('util');
const exec = promisify(require('child_process').execFile);

const ensure = require('./ensure');

const YARN_VERSION = '1.15.2';

(async () => {
    try {
        const { stdout: version } = await exec('yarn', ['-v']);
        const [semver] = await ensure('semver');

        if (!semver.satisfies(version, YARN_VERSION)) {
            throw new Error();
        }
    } catch (e) {
        require('./log').log(`Installing yarn@${YARN_VERSION}`);
        await exec('npm', ['i', '-g', `yarn@${YARN_VERSION}`]);
    }
})();

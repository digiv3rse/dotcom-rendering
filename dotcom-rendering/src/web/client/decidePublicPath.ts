/**
 * Determine the path that webpack should use as base for dynamic imports
 *
 * @returns The webpack public path to use
 */
export const decidePublicPath = (): string => {
	const isDev = process.env.NODE_ENV === 'development';
	if (isDev && window.location.hostname === 'localhost') {
		// Use the absolute path when in development mode and running locally
		// Ensures asset paths are correct relative to Frontend
		return 'http://localhost:3030/assets/';
	} else if (
		window.location.hostname === (process.env.HOSTNAME ?? 'localhost')
	) {
		// Use a relative path when hostname is set or using localhost in non-dev environments
		// e.g. when using a reverse proxy, or running in CI
		return '/assets/';
	} else {
		return `${window.guardian.config.frontendAssetsFullURL}assets/`;
	}
};

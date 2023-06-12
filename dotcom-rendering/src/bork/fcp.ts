/** synthetically bork FCP https://web.dev/fcp/ */
export const fcp = (delay: number): void => {
	try {
		if (CSS.supports('animation-duration', 'var(--fake-var)')) {
			window.guardian.borkWebVitals.fcp = String(delay);
			// eslint-disable-next-line no-console -- we want to apologise, in the name of science!
			console.info(`🍊 Delaying first paint by ${delay}ms, sorry`);

			const root = document.documentElement;
			root.style.setProperty('--bork-fcp-amount', `${delay}ms`);
			root.classList.add('bork-fcp');
		}
	} catch (e) {
		// do nothing
	}
};

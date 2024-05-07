/**
 * @file
 * This file was migrated from:
 * https://github.com/guardian/support-dotcom-components/blob/a482b35a25ca59f66501c4de02de817046206298/packages/modules/src/modules/shared/ModuleWrapper.tsx
 */
import type { JSX } from '@emotion/react/jsx-runtime';
import type { ReactComponent } from '../lib/ReactComponent';

export function withParsedProps<ModuleProps extends JSX.IntrinsicAttributes>(
	Module: ReactComponent<ModuleProps>,
	validate: (props: unknown) => props is ModuleProps,
): ReactComponent<unknown> {
	const WrappedModule = (props: unknown) => {
		if (validate(props)) {
			return <Module {...props} />;
		}
		return <></>;
	};

	return WrappedModule;
}

import React from 'react';
import { css } from '@emotion/react';

import { EditionDropdown } from '@frontend/web/components/EditionDropdown';
import { Hide } from '@root/src/web/components/Hide';
import { Logo } from '@frontend/web/components/Logo';
import { Links } from '@frontend/web/components/Links';

const headerStyles = css`
	/* Ensure header height contains it's children */
	overflow: auto;
	/* Prevent a scrollbar appearing here on IE/Edge */
	-ms-overflow-style: none;
`;

type Props = {
	edition: Edition;
	idUrl?: string;
	mmaUrl?: string;
};

export const Header = ({ edition, idUrl, mmaUrl }: Props) => (
	<header css={headerStyles}>
		<Hide when="below" breakpoint="desktop">
			<div id="edition-root">
				<EditionDropdown
					edition={edition}
					dataLinkName="nav2 : topbar : edition-picker: toggle"
				/>
			</div>
		</Hide>
		<Logo />
		<div id="reader-revenue-links-header" />
		<div id="links-root">
			<Links giftingURL="" idUrl={idUrl} mmaUrl={mmaUrl} />
		</div>
	</header>
);

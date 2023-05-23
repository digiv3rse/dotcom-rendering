import { css } from '@emotion/react';
import {
	brand,
	breakpoints,
	neutral,
	space,
	textSans,
} from '@guardian/source-foundations';
import { Standard } from '../../../fixtures/generated/articles/Standard';
import { editionList } from '../lib/edition';
import { extractArticleNav } from '../server/articleToHtml';
import { Footer } from './Footer';
import { Section } from './Section';

const Wrapper = ({ children }: { children: JSX.Element }) => (
	<Section
		fullWidth={true}
		padSides={false}
		backgroundColour={brand[400]}
		borderColour={neutral[93]}
		showSideBorders={false}
		element="footer"
	>
		{children}
	</Section>
);

export const Footers = () => (
	<ul>
		{editionList.map(({ editionId }) => (
			<li
				key={editionId}
				css={css`
					position: relative;
					padding: ${space[6]} 0;
				`}
			>
				<h1
					css={css`
						color: ${brand[400]};
						${textSans.xxxlarge()};
					`}
				>
					{editionId} Footer
				</h1>
				<Wrapper>
					<Footer
						pageFooter={Standard.pageFooter}
						selectedPillar={'news'}
						pillars={extractArticleNav(Standard).pillars}
						urls={Standard.nav.readerRevenueLinks.header}
						editionId={editionId}
						contributionsServiceUrl={
							Standard.contributionsServiceUrl
						}
					/>
				</Wrapper>
			</li>
		))}
	</ul>
);
Footers.storyName = 'Footer for all editions';
Footers.story = {
	parameters: {
		chromatic: {
			viewports: Object.values(breakpoints),
		},
	},
};

export default {
	component: Footers,
	title: 'Components/Footer',
};

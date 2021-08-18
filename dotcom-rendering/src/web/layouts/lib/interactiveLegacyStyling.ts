import { css } from '@emotion/react';
import { from, until } from '@guardian/src-foundations/mq';

import { center } from '@root/src/web/lib/center';

// Classes present in Frontend on figure wrapping elements for certain element types.
export const interactiveLegacyFigureClasses =
	'element-interactive element interactive';

// Classes present in Frontend that we add for legacy interactives.
export const interactiveLegacyClasses = {
	contentInteractive: 'content--interactive',
	contentLabels: 'content__labels',
	contentLabelsNotImmersive: 'content__labels--not-immersive',
	contentMainColumn: 'content__main-column--interactive',
	headline: 'content__headline',
	labelLink: 'content__label__link',
	metaContainer: 'content__meta-container_dcr',
	standFirst: 'content__standfirst',
	byline: 'byline',
	shareIcons: 'meta__social',

	// some legacy interactives do not use the content--interactive container
	// to ensure all editorial content has correct font, we need to target this too
	interactiveWrapper: 'interactive-wrapper',
};

// Styles expected by interactives from the Frontend days. These shouldn't be
// used for new interactives though.
export const interactiveGlobalStyles = css`
	/* Scope this as tightly as possible. Otherwise, e.g. box-model will break
	footer. */
	body article {
		*,
		*:before,
		*:after {
			box-sizing: content-box;
		}

		.fc-container__inner,
		.gs-container {
			${center}
		}

		/* Legacy utility classes */
		.u-h {
			border: 0;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		/* There is room for better solution where we don't have to load global styles onto the body.
			For now this works, but we shouldn't support for it for newly made interactives. */
		.${interactiveLegacyClasses.contentInteractive},
			.${interactiveLegacyClasses.interactiveWrapper} {
			margin-bottom: 1rem;

			/* stylelint-disable */
			font-family: GuardianTextEgyptian, Guardian Text Egyptian Web,
				Georgia, serif;
			/* stylelint-enable */

			font-size: 1.0625rem;
			line-height: 1.5;
			font-weight: 400;
		}

		button,
		input,
		optgroup,
		select,
		textarea {
			color: inherit;
		}

		button,
		html input[type='button'],
		input[type='reset'],
		input[type='submit'] {
			cursor: pointer;
		}


		.meta__extras {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 6px;
			position: relative;
			ul {
				margin-left: 0px;
			}
		}

		/* Start social icon support */
		.meta__social {
			padding-top: 0.375rem;
		}

		ul.social {
			margin-left: 0;
		}

		.social__item {
			float: left;
			min-width: 2rem;
			padding: 0 0.1875rem 0.375rem 0;
			cursor: pointer;

			.inline-icon__fallback {
				display: none;
			}

			.inline-icon {
				background-color: transparent;
				border: 1px solid #dcdcdc; /* stylelint-disable-line */
				transition: fill 0.3s ease, background-color 0.3s ease;
			}

			.social-icon {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				border: 0;
				min-width: 2rem;
				max-width: 100%;
				width: auto;
				height: 2rem;
				svg {
					height: 88%;
					width: 88%;
				}
			}

			.rounded-icon {
				border-radius: 62.5rem;
				display: inline-block;
				vertical-align: middle;
				position: relative;
			}

			.centered-icon svg {
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				margin: auto;
				position: absolute;
			}
		}

		.content__dateline {
			font-size: 0.75rem;
			line-height: 1rem;
			position: relative;
			box-sizing: border-box;
			padding-top: 0.125rem;
			margin-bottom: 0.375rem;
		}

		.content__dateline time {
			display: inline-block;
		}
		/* End social icon support */

		.content__main-column {
			position: relative;
			${from.tablet} {
				max-width: 620px;
			}
			${from.desktop} {
				margin-left: 0px;
				margin-right: 310px;
			}
			${from.leftCol} {
				margin-left: 150px;
			}
			${from.wide} {
				margin-left: 230px;
			}
		}


		/* Typically required for ad display. */
		${until.tablet} {
			.hide-until-tablet {
				display: none;
			}
		}

		${from.tablet} {
			.mobile-only {
				display: none;
			}
		}

		.interactive-atom {
			position: relative;
		}

		ol,
		ul {
			padding: 0;
			margin-left: 1.5625rem;
		}
	}
`;

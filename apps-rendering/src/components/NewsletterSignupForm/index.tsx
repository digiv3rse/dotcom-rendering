// ----- Imports ----- //

import { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import {
	headline,
	space,
	sport,
	textSans,
	brandAlt,
	neutral,
	text,
} from '@guardian/source-foundations';
import {
	Button,
	Label,
	Link,
	SvgEnvelope,
	TextInput,
} from '@guardian/source-react-components';
import { NewsletterSignUp } from 'bodyElement';
import type { FC } from 'react';

// ----- Component ----- //

interface Props {
	format: ArticleFormat;
	element: NewsletterSignUp;
}

const containerStyles = (format: ArticleFormat): SerializedStyles => {
	return css`
		border: 3px dashed black;
		padding: 8px;
		border-radius: 4px;
	`;
};

const titleStyles = (theme: string) => css`
	${headline.xxsmall({ fontWeight: 'bold' })}
	flex-grow: 1;
	margin-bottom: ${space[2]}px;
	span {
		color: ${theme === 'news' ? sport[500] : 'inherit'};
	}
`;

const descriptionStyles = css`
	${textSans.xsmall({ lineHeight: 'tight' })}
	margin-bottom: ${space[2]}px;
`;

const iconHolderStyles = css`
	display: flex;
	align-items: center;
	margin-bottom: ${space[2]}px;
	svg {
		background-color: ${brandAlt[400]};
		border-radius: 50%;
		margin-right: ${space[2]}px;
	}

	b {
		${textSans.xsmall({ fontWeight: 'bold' })}
	}
`;

const formStyle = css`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

const termsStyle = css`
	${textSans.xxsmall({ lineHeight: 'tight' })}
	color: ${text.supporting};
	a {
		${textSans.xxsmall({ fontWeight: 'bold' })};
		color: ${neutral[0]};
		text-decoration: underline;
		:hover {
			color: ${neutral[0]};
			text-decoration: underline;
		}
	}
	strong {
		color: ${neutral[0]};
		font-weight: bold;
	}
`;

const NewsletterSignupForm: FC<Props> = ({ format, element }) => {
	const { displayName, frequency, description, theme } = element.newsletter;
	return (
		<aside css={containerStyles(format)}>
			<p css={titleStyles(theme)}>
				Sign up to <span>{displayName}</span>
			</p>

			<div css={iconHolderStyles}>
				<SvgEnvelope size="small" />
				<b>{frequency}</b>
			</div>

			<p css={descriptionStyles}>{description}</p>

			<Label
				text="Enter your email address"
				cssOverrides={css`
					div {
						${textSans.xxsmall({ fontWeight: 'bold' })};
					}
				`}
			/>
			<div css={formStyle}>
				<TextInput
					type={'email'}
					width={30}
					hideLabel
					label={'Enter your email address'}
					cssOverrides={css`
						height: 36px;
						margin-right: ${space[3]}px;
						margin-top: 0;
						margin-bottom: ${space[2]}px;
					`}
				/>
				<Button
					size="small"
					title="Sign up"
					cssOverrides={css`
						background-color: ${neutral[0]};
						margin-bottom: ${space[2]}px;
					`}
				>
					Sign up
				</Button>
			</div>

			<p css={termsStyle}>
				<strong>Privacy Notice: </strong>
				Newsletters may contain info about charities, online ads, and
				content funded by outside parties. For more information see our{' '}
				<Link
					data-ignore="global-link-styling"
					href="https://www.theguardian.com/help/privacy-policy"
					rel="noopener noreferrer"
				>
					Privacy Policy
				</Link>
				. We use Google reCaptcha to protect our website and the Google{' '}
				<Link
					data-ignore="global-link-styling"
					href="https://policies.google.com/privacy"
					rel="noopener noreferrer"
				>
					Privacy Policy
				</Link>{' '}
				and{' '}
				<Link
					data-ignore="global-link-styling"
					href="https://policies.google.com/terms"
					rel="noopener noreferrer"
				>
					Terms of Service
				</Link>{' '}
				apply.
			</p>
		</aside>
	);
};

// ----- Exports ----- //

export default NewsletterSignupForm;

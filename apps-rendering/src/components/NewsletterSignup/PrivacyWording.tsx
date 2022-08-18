// ----- Imports ----- //

import { css } from '@emotion/react';
import { textSans } from '@guardian/source-foundations';
import { Link } from '@guardian/source-react-components';
import type { FC } from 'react';
import { darkModeCss } from 'styles';
import { text } from '@guardian/common-rendering/src/editorialPalette';
import { ArticleFormat } from '@guardian/libs';

// ----- Component ----- //

interface Props {
	format: ArticleFormat;
	useCaptcha: boolean;
}

const termsStyle = (format: ArticleFormat) => css`
	${textSans.xxsmall({ lineHeight: 'tight' })}
	color: ${text.privacyMessage(format)};
	a {
		${textSans.xxsmall({ fontWeight: 'bold' })};
		color: ${text.signUpForm(format)};
		text-decoration: underline;
		:hover {
			color: ${text.signUpForm(format)};
			text-decoration: underline;
		}
	}
	strong {
		color: ${text.signUpForm(format)};
		font-weight: bold;
	}

	${darkModeCss`
		color: ${text.privacyMessageDark(format)};

		a {
			color: ${text.signUpFormDark(format)};
			:hover {
				color: ${text.signUpFormDark(format)};
			}
		}
		strong {
			color: ${text.signUpFormDark(format)};
		}
	`}
`;

const PrivacyWording: FC<Props> = ({ useCaptcha, format }) => {
	return (
		<p css={termsStyle(format)}>
			<strong>Privacy Notice: </strong>
			<span>
				Newsletters may contain info about charities, online ads, and
				content funded by outside parties. For more information see our{' '}
				<Link
					data-ignore="global-link-styling"
					href="https://www.theguardian.com/help/privacy-policy"
					rel="noopener noreferrer"
				>
					Privacy Policy
				</Link>
				.
			</span>{' '}
			{useCaptcha && (
				<span>
					We use Google reCAPTCHA to protect our website and the
					Google{' '}
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
				</span>
			)}
		</p>
	);
};

// ----- Exports ----- //

export default PrivacyWording;

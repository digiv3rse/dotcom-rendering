import { css } from '@emotion/react';
import { palette, textSans } from '@guardian/source-foundations';
import { Link } from '@guardian/source-react-components';

interface Props {
	textColor?: 'supporting' | 'regular';
}

const GUARDIAN_PRIVACY_POLICY =
	'https://www.theguardian.com/help/privacy-policy';
const GOOGLE_PRIVACY_POLICY = 'https://policies.google.com/privacy';
const GOOGLE_TERMS_OF_SERVICE = 'https://policies.google.com/terms';

type PolicyUrl =
	| typeof GUARDIAN_PRIVACY_POLICY
	| typeof GOOGLE_PRIVACY_POLICY
	| typeof GOOGLE_TERMS_OF_SERVICE;

type LegalLinkProps = { href: PolicyUrl; children: string };

/** Link component fixed with data-ignore and rel attributes for consistency in this file only */
const LegalLink = ({ href, children }: LegalLinkProps) => (
	<Link data-ignore="global-link-styling" href={href} rel="noreferrer">
		{children}
	</Link>
);

const termsStyle = (textColor: 'supporting' | 'regular') => css`
	${textSans.xxsmall({ lineHeight: 'tight' })}
	color: ${textColor === 'regular'
		? palette.neutral[7]
		: palette.neutral[46]};
	a {
		${textSans.xxsmall()};
		color: ${textColor === 'regular'
			? palette.neutral[7]
			: palette.neutral[0]};
		text-decoration: underline;
		:hover {
			color: ${textColor === 'regular'
				? palette.neutral[7]
				: palette.neutral[0]};
			text-decoration: underline;
		}
	}
	strong {
		color: ${textColor === 'regular'
			? palette.neutral[7]
			: palette.neutral[0]};
		font-weight: bold;
	}
`;

export const NewsletterPrivacyMessage = ({
	textColor = 'supporting',
}: Props) => (
	<span css={termsStyle(textColor)}>
		<strong>Privacy Notice: </strong>
		Newsletters may contain info about charities, online ads, and content
		funded by outside parties. For more information see our{' '}
		<LegalLink href={GUARDIAN_PRIVACY_POLICY}>Privacy Policy</LegalLink>. We
		use Google reCaptcha to protect our website and the Google{' '}
		<LegalLink href={GOOGLE_PRIVACY_POLICY}>Privacy Policy</LegalLink> and{' '}
		<LegalLink href={GOOGLE_TERMS_OF_SERVICE}>Terms of Service</LegalLink>{' '}
		apply.
	</span>
);

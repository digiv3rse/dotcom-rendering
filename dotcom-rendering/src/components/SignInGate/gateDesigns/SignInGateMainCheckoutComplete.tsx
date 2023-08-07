import { css } from '@emotion/react';
import {
	body,
	brand,
	from,
	headline,
	neutral,
	space,
} from '@guardian/source-foundations';
import { Button, Link, LinkButton } from '@guardian/source-react-components';
import { trackLink } from '../componentEventTracking.tsx';
import type { Product, SignInGateProps, UserType } from '../types.ts';
import {
	firstParagraphOverlay,
	hideElementsCss,
	registerButton,
	signInGateContainer,
} from './shared.tsx';
import { SignInGateMain } from './SignInGateMain.tsx';

const personalisedHeadingStyles = css`
	${headline.small({ fontWeight: 'bold' })};
	border-top: 2px ${brand[400]} solid;
	${from.phablet} {
		padding-right: 160px;
		${headline.medium({ fontWeight: 'bold' })};
	}
	padding-bottom: ${space[2]}px;
`;

const personalisedBodyBold = css`
	${body.medium({ fontWeight: 'bold' })}
	${from.phablet} {
		padding-right: 130px;
	}
	color: ${brand[400]};
`;

const bulletStyles = css`
	text-indent: -30px; /* second line indentation */
	margin-left: 30px; /* second line indentation */
	color: ${neutral[100]};
	display: flex;
	flex-direction: column;
	li:not(:first-of-type) {
		margin-top: ${space[1]}px;
	}
	li::before {
		content: '';
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: ${space[4]}px;
		background: ${brand[400]};
		border-radius: 50%;
	}
`;

const personalisedBodyTextList = css`
	${body.medium({ fontWeight: 'medium' })};
	color: black;
`;

const personalisedActionButtons = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;

	> a {
		/* stylelint-disable-next-line declaration-no-important */
		margin-right: ${space[4]}px !important;

		${from.mobileMedium} {
			/* stylelint-disable-next-line declaration-no-important */
			margin-right: ${space[9]}px !important;
		}

		/* stylelint-disable-next-line declaration-no-important */
		text-decoration: none !important;
	}
`;

const notNowButton = css`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${brand[400]} !important;
	text-decoration: none;
`;

const faqPersonalised = css`
	padding-bottom: 18px;
	margin-top: ${space[3]}px;
	& a {
		display: block;
		margin-top: ${space[6]}px;
		margin-bottom: ${space[4]}px;
		color: ${brand[500]};
		text-decoration-color: ${brand[500]};
		text-underline-position: under;
	}

	& a:hover {
		color: ${brand[500]};
		text-decoration-color: ${brand[500]};
	}
`;

export const bodySpacing = css`
	padding-top: ${space[2]}px;
	padding-bottom: ${space[2]}px;
`;

// HEADER TEXT
const SUBSCRIPTION_HEADER = 'Thank you for subscribing';
const SUPPORTER_HEADER = 'Thank you for your support';

// SUBHEADER TEXT
const SIGN_IN_PROMPT = 'Remember to sign in for a better experience.';

// BODY TEXT
const SIGN_IN_INCENTIVES_DIGITAL = [
	'Supporter rewards – unlock the benefits of your support',
	'Incisive analysis and original reporting direct to your inbox, with our newsletters',
	'Get involved in the discussion – comment on stories',
];

const SIGN_IN_INCENTIVES_NON_DIGITAL = [
	'Fewer interruptions',
	'Incisive analysis and original reporting direct to your inbox, with our newsletters',
	'Get involved in the discussion – comment on stories',
];

// BUTTON TEXT
const COMPLETE_REGISTRATION_BUTTON = 'Complete registration';
const SIGN_IN_BUTTON = 'Sign in';

const getHeadingText: (product: Product) => string = (product) => {
	const headingMap: Record<Product, string> = {
		SupporterPlus: SUBSCRIPTION_HEADER,
		Paper: SUBSCRIPTION_HEADER,
		GuardianWeekly: SUBSCRIPTION_HEADER,
		Contribution: SUPPORTER_HEADER,
	};
	return headingMap[product];
};

const getButtonText: (userType: UserType) => string = (userType) => {
	const buttonMap: Record<UserType, string> = {
		new: COMPLETE_REGISTRATION_BUTTON,
		guest: COMPLETE_REGISTRATION_BUTTON,
		current: SIGN_IN_BUTTON,
	};
	return buttonMap[userType];
};

const getBodyText: (product: Product) => string[] = (product) => {
	const bodyTextMap: Record<Product, string[]> = {
		SupporterPlus: SIGN_IN_INCENTIVES_DIGITAL,
		Paper: SIGN_IN_INCENTIVES_NON_DIGITAL,
		GuardianWeekly: SIGN_IN_INCENTIVES_NON_DIGITAL,
		Contribution: SIGN_IN_INCENTIVES_NON_DIGITAL,
	};
	return bodyTextMap[product];
};

export const SignInGateMainCheckoutComplete = ({
	signInUrl,
	registerUrl,
	guUrl,
	dismissGate,
	abTest,
	ophanComponentId,
	isMandatory = false,
	checkoutCompleteCookieData,
}: SignInGateProps) => {
	// There is a type check above which means this shouldn't be
	// possible to be undefined here, so this is just handling
	// the fact that the type is optional.
	// It's an optional type because `SignInGateProps` is shared
	// with other components that don't use this type
	if (checkoutCompleteCookieData === undefined) {
		return (
			<SignInGateMain
				signInUrl={signInUrl}
				registerUrl={registerUrl}
				guUrl={guUrl}
				dismissGate={dismissGate}
				abTest={abTest}
				ophanComponentId={ophanComponentId}
				isMandatory={false}
			/>
		);
	}
	const { userType, product } = checkoutCompleteCookieData;

	// send new/guest userType to the /register page instead of /signin
	const personaliseSignInURl = (url: string): string => {
		if (userType === 'new' || userType == 'guest') {
			const regex = /\/(signin)/;
			const substitution = `/register`;
			return url.replace(regex, substitution);
		}
		return url;
	};

	return (
		<div css={signInGateContainer} data-cy="sign-in-gate-main">
			<style>{hideElementsCss}</style>
			<div css={firstParagraphOverlay} />
			<h1 css={personalisedHeadingStyles}>{getHeadingText(product)}</h1>
			<div css={bodySpacing}>
				<p css={personalisedBodyBold}>{SIGN_IN_PROMPT}</p>
				<p css={personalisedBodyBold}>This includes: </p>
			</div>
			<ul css={bulletStyles}>
				{getBodyText(product).map((item) => {
					return (
						<li css={personalisedBodyTextList} key={item}>
							{item}
						</li>
					);
				})}
			</ul>
			<div css={personalisedActionButtons}>
				<LinkButton
					data-cy="sign-in-gate-main_register"
					data-ignore="global-link-styling"
					css={registerButton}
					priority="primary"
					size="small"
					href={personaliseSignInURl(signInUrl)}
					onClick={() => {
						trackLink(ophanComponentId, 'register-link', abTest);
					}}
				>
					{getButtonText(userType)}
				</LinkButton>
				{!isMandatory && (
					<Button
						data-cy="sign-in-gate-main_dismiss"
						data-ignore="global-link-styling"
						css={notNowButton}
						priority="subdued"
						size="small"
						onClick={() => {
							dismissGate();
							trackLink(ophanComponentId, 'not-now', abTest);
						}}
					>
						Not now
					</Button>
				)}
			</div>

			<div css={faqPersonalised}>
				<Link
					data-ignore="global-link-styling"
					href={`${guUrl}/info/2014/nov/03/why-your-data-matters-to-us-full-text`}
					onClick={() => {
						trackLink(ophanComponentId, 'why-link', abTest);
					}}
				>
					How will my information & data be used?
				</Link>

				<Link
					data-ignore="global-link-styling"
					href={`${guUrl}/help/identity-faq`}
					onClick={() => {
						trackLink(ophanComponentId, 'help-link', abTest);
					}}
				>
					Get help with registering or signing in
				</Link>
			</div>
		</div>
	);
};

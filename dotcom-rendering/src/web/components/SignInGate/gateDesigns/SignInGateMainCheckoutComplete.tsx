import { cmp } from '@guardian/consent-management-platform';
import { Button, Link, LinkButton } from '@guardian/source-react-components';
import { trackLink } from '../componentEventTracking';
import type {
	Product,
	SignInGatePropsWithCheckoutCompleteCookieData,
	UserType,
} from '../types';
// import type { SignInGatePropsWithCheckoutCompleteCookieData } from '../types';
import {
	actionButtons,
	bodyBold,
	bodySeparator,
	bodyText,
	faq,
	firstParagraphOverlay,
	headingStyles,
	hideElementsCss,
	laterButton,
	privacyLink,
	registerButton,
	signInGateContainer,
	signInHeader,
	signInLink,
} from './shared';

const getHeadingText: (userType: UserType) => string = (userType) => {
	const headingMap: Record<UserType, string> = {
		new: 'Complete your registration',
		guest: 'Complete your registration',
		current: 'Sign in to your account',
	};
	return headingMap[userType];
};

const getSubHeadingText: (product: Product) => string = (product) => {
	const subHeadingMap: Record<Product, string> = {
		DigitalPack: 'You have a subscription.',
		Paper: 'You have a subscription.',
		GuardianWeekly: 'You have a subscription.',
		Contribution: 'You are a Guardian supporter',
	};
	return subHeadingMap[product];
};

const getBodyText: (userType: UserType, product: Product) => string = (
	userType,
	product,
) => {
	// TS does not support pattern matching by type
	const pattern = `${userType}, ${product}`;
	switch (pattern) {
		case 'new, DigitalPack' || 'guest, DigitalPack':
			return 'Complete your registration to stop seeing ads, to see fewer requests for financial support, to subscribe to newsletters and comment, and to easily manage your account.';
		case 'new, Paper' ||
			'new, GuardianWeekly' ||
			'new, Contribution' ||
			'guest, Paper' ||
			'guest, GuardianWeekly' ||
			'guest, Contribution':
			return 'Complete your registration to receive fewer requests for financial support, to easily manage your account, and to subscribe to newsletters and comment.';
		case 'current, DigitalPack':
			return 'Sign in to stop seeing ads, to see fewer requests for financial support, to subscribe to newsletters and comment, and to easily manage your account.';
		case 'current, Paper' ||
			'current, GuardianWeekly' ||
			'current, Contribution':
			return 'Sign in to receive fewer requests for financial support, to easily manage your account, and to subscribe to newsletters and comment.';
		default:
			return ''; // TODO never case???
	}
};

const getButtonText: (userType: UserType) => string = (userType) => {
	const buttonMap: Record<UserType, string> = {
		new: 'Complete registration',
		guest: 'Complete registration',
		current: 'Sign in',
	};
	return buttonMap[userType];
};

export const SignInGateMainCheckoutComplete = ({
	signInUrl,
	guUrl,
	dismissGate,
	abTest,
	ophanComponentId,
	isMandatory = false,
	checkoutCompleteCookieData,
}: SignInGatePropsWithCheckoutCompleteCookieData) => {
	const { userType, product } = checkoutCompleteCookieData;

	return (
		<div css={signInGateContainer} data-cy="sign-in-gate-main">
			<style>{hideElementsCss}</style>
			<div css={firstParagraphOverlay} />
			<h1 css={headingStyles}>{getHeadingText(userType)} </h1>
			<p css={bodyBold}>{getSubHeadingText(product)}</p>
			<p css={bodyText}>
				{getBodyText(userType, product)}
				You’ll always be able to control your own{' '}
				<button
					data-cy="sign-in-gate-main_privacy"
					css={privacyLink}
					onClick={() => {
						cmp.showPrivacyManager();
						trackLink(ophanComponentId, 'privacy', abTest);
					}}
				>
					privacy settings
				</button>
				.
			</p>
			<div css={actionButtons}>
				<LinkButton
					data-cy="sign-in-gate-main_register"
					data-ignore="global-link-styling"
					css={registerButton}
					priority="primary"
					size="small"
					href={signInUrl}
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
						css={laterButton}
						priority="subdued"
						size="small"
						onClick={() => {
							dismissGate();
							trackLink(ophanComponentId, 'not-now', abTest);
						}}
					>
						I’ll do it later
					</Button>
				)}
			</div>

			<p css={[bodySeparator, bodyBold, signInHeader]}>
				Have a subscription? Made a contribution? Already registered?
			</p>

			<Link
				data-cy="sign-in-gate-main_signin"
				data-ignore="global-link-styling"
				css={signInLink}
				href={signInUrl}
				onClick={() => {
					trackLink(ophanComponentId, 'sign-in-link', abTest);
				}}
			>
				Sign In
			</Link>

			<div css={faq}>
				<Link
					data-ignore="global-link-styling"
					href={`${guUrl}/membership/2019/dec/20/signing-in-to-the-guardian`}
					onClick={() => {
						trackLink(ophanComponentId, 'how-link', abTest);
					}}
				>
					Why register & how does it help?
				</Link>

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

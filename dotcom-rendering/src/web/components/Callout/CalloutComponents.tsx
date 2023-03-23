import { css } from '@emotion/react';
import {
	body,
	brand,
	neutral,
	palette,
	space,
	success,
	textSans,
} from '@guardian/source-foundations';
import {
	Button,
	SvgShare,
	SvgTickRound,
} from '@guardian/source-react-components';
import { useState } from 'react';

export const calloutLinkStyles = css`
	a {
		color: ${brand[500]};
		text-decoration: none;
		border-bottom: 1px solid #12121240;
	}
	a:hover,
	a:active {
		border-bottom: 1px solid ${brand[500]};
	}
`;

const descriptionStyles = css`
	${calloutLinkStyles}
	padding-bottom: ${space[4]}px;
	${body.medium()}

	p {
		margin-bottom: ${space[3]}px;
	}
`;

export const CalloutDescription = ({
	description,
}: {
	description: string;
}) => {
	// this data-ignore attribute ensures correct formatting for links in the description
	const htmlSplit = description.split('href');
	const withDataIgnore = htmlSplit.join(
		'data-ignore="global-link-styling" href',
	);

	return (
		<div css={descriptionStyles}>
			<div dangerouslySetInnerHTML={{ __html: withDataIgnore }}></div>
			<div>
				Please share your story if you are 18 or over, anonymously if
				you wish. For more information please see our{' '}
				<a
					data-ignore="global-link-styling"
					href="https://www.theguardian.com/help/terms-of-service"
				>
					terms of service
				</a>{' '}
				and{' '}
				<a
					data-ignore="global-link-styling"
					href="https://www.theguardian.com/help/privacy-policy"
				>
					privacy policy
				</a>
				.
			</div>
		</div>
	);
};

const expiredStyles = css`
	${textSans.small()};
	color: ${palette.brand};
	background-color: ${palette.brandAlt[400]};
	width: fit-content;
`;

export const CalloutExpired = () => {
	return (
		<div css={expiredStyles}>
			<p>This callout is now closed to any further submissions.</p>
			<p>
				You can see{' '}
				<a href="https://www.theguardian.com/profile/guardian-community-team">
					other Guardian community callouts here
				</a>{' '}
				or{' '}
				<a href="https://www.theguardian.com/community/2015/sep/02/guardianwitness-send-us-a-story">
					tell us about a story here.
				</a>
			</p>
		</div>
	);
};

const shareCalloutStyles = css`
	display: flex;
	align-items: center;
	position: relative;
`;

const shareCalloutTextStyles = css`
	${textSans.xsmall()}
`;

const shareCalloutLinkStyles = css`
	${textSans.xsmall()}
	color: ${brand[500]};
	border-bottom: 1px solid #12121240;
	text-decoration: none;
	:hover,
	:active {
		border-bottom: 1px solid ${brand[500]};
	}
`;

const sharePopupStyles = css`
	${textSans.xsmall()};
	position: absolute;
	display: flex;
	align-items: center;
	min-width: 180px;
	transform: translate(100%, 0);
	background-color: ${neutral[100]};
	color: ${neutral[7]};
	font-weight: normal;
	border-radius: ${space[1]}px;
	z-index: 1;
	padding: 0 ${space[1]}px 0 0;
	box-shadow: 0px 2px ${space[2]}px rgba(0, 0, 0, 0.5);

	> svg {
		fill: ${success[400]};
	}
`;
const shareIconStyles = css`
	display: inline-flex;
	margin-right: ${space[2]}px;
	border-radius: 50%;
	border: 1px solid ${brand[500]};
	box-sizing: border-box;
	fill: ${brand[500]};
	padding: 0.5px 0;
`;

export const CalloutShare = ({
	title,
	urlAnchor,
}: {
	title: string;
	urlAnchor: string;
}) => {
	const [isCopied, setIsCopied] = useState(false);

	const onShare = async () => {
		const url = window.location.href;
		if (
			'share' in navigator &&
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			)
		) {
			const shareTitle = `Share your experience: ${title}`;

			const shareText = `
			I saw this callout in an article: ${url}#${urlAnchor}
			You can share your story by using the form on this article, or by contacting the Guardian on WhatsApp, Signal or Telegram.`;

			await navigator.share({
				title: shareTitle,
				text: shareText,
			});
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 3000);
		} else if ('clipboard' in navigator) {
			await navigator.clipboard.writeText(`${url}#${urlAnchor}`);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 3000);
		}
	};

	if (typeof window === 'undefined' || typeof navigator === 'undefined')
		return <></>;

	return (
		<>
			<div css={shareCalloutStyles}>
				<span css={shareIconStyles}>
					<SvgShare size="small" />
				</span>
				<div css={shareCalloutTextStyles}>
					Know others who are affected?{' '}
					<Button
						size="xsmall"
						priority="subdued"
						onClick={onShare}
						cssOverrides={shareCalloutLinkStyles}
					>
						Please share this callout.
					</Button>
					{isCopied && (
						<span css={sharePopupStyles} role="alert">
							<SvgTickRound size="medium" />
							Link copied to clipboard
						</span>
					)}
				</div>
			</div>
		</>
	);
};

const termsAndConditionsStyles = css`
	${calloutLinkStyles}
	${textSans.small()}
	padding-bottom: ${space[4]}px;
`;

export const CalloutTermsAndConditions = () => (
	<div css={termsAndConditionsStyles}>
		Your responses, which can be anonymous, are secure as the form is
		encrypted and only the Guardian has access to your contributions. We
		will only use the data you provide us for the purpose of the feature and
		we will delete any personal data when we no longer require it for this
		purpose. For true anonymity please use our{' '}
		<a
			data-ignore="global-link-styling"
			href="https://www.theguardian.com/securedrop"
		>
			SecureDrop
		</a>{' '}
		service instead.
	</div>
);

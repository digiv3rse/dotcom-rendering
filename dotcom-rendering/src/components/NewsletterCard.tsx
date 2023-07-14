import { css } from '@emotion/react';
import {
	bodyObjectStyles,
	headlineObjectStyles,
	palette,
	space,
} from '@guardian/source-foundations';
import {
	Button,
	SvgCheckmark,
	SvgPlus,
} from '@guardian/source-react-components';
import { useCallback, useEffect, useState } from 'react';
import {
	getOphanRecordFunction,
	submitComponentEvent,
} from '../client/ophan/ophan';
import { useIsInView } from '../lib/useIsInView';
import type { Newsletter } from '../types/content';
import { CardPicture } from './CardPicture';
import { NewsletterDetail } from './NewsletterDetail';

interface Props {
	newsletter: Newsletter;
	cardPosition: number;
	carouselPosition?: number;
	groupTitle: string;
}

export const BUTTON_ROLE = 'GroupedNewslettersList-sign-up-button';
export const BUTTON_SELECTED_CLASS =
	'js-GroupedNewslettersList-sign-up-button--selected';
export const ICON_PLUS_CLASS =
	'js-GroupedNewslettersList-sign-up-button__plus-icon';
export const ICON_TICK_CLASS =
	'js-GroupedNewslettersList-sign-up-button__tick-icon';

const groupItemStyle = css`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 215px;
	background-color: ${palette.neutral[97]};
`;

const contentWrapperStyle = css`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: ${space[1]}px;
	padding-bottom: ${space[2]}px;

	h3 {
		${headlineObjectStyles.xxxsmall()};
		margin-bottom: ${space[3]}px;
	}

	p {
		${bodyObjectStyles.xsmall({})};
	}
`;

const buttonHolderStyle = css`
	margin-top: auto;
`;

const buttonStyle = css`
	background-color: ${palette.neutral[100]};
	color: ${palette.neutral[7]};
	border-color: ${palette.neutral[7]};
	.${ICON_TICK_CLASS} {
		display: none;
	}

	&.${BUTTON_SELECTED_CLASS} {
		background-color: ${palette.neutral[7]};
		color: ${palette.neutral[100]};

		.${ICON_PLUS_CLASS} {
			display: none;
		}
		.${ICON_TICK_CLASS} {
			display: inline;
		}
	}

	&:hover {
		background-color: ${palette.neutral[86]};
	}

	&.${BUTTON_SELECTED_CLASS}:hover {
		background-color: ${palette.neutral[46]};
		border-color: ${palette.neutral[46]};
	}
`;

const illustrationStyle = css`
	width: 100%;
	margin-bottom: ${space[1]}px;
`;

const getButtonInitialAriaAttribute = (newsletterName: string) => ({
	'aria-label': `add ${newsletterName} to subscribe list`,
	'data-aria-label-when-unchecked': `add ${newsletterName} to subscribe list`,
	'data-aria-label-when-checked': `remove ${newsletterName} from subscribe list`,
});

const IllustrationPlaceholder = (props: {
	theme?: string;
	aspectWidth: number;
	aspectHeight: number;
	altText?: string;
}) => {
	const getBackground = (theme?: string): string => {
		switch (theme) {
			case 'culture':
			case 'news':
			case 'sport':
			case 'lifestyle':
			case 'opinion':
				return palette[theme][400];
			default:
				return palette.brand[400];
		}
	};

	return (
		<figure
			role="img"
			css={[
				illustrationStyle,
				css`
					position: relative;
				`,
			]}
		>
			<img
				css={css`
					background-color: ${getBackground(props.theme)};
					width: 100%;
					height: auto;
				`}
				width={props.aspectWidth}
				height={props.aspectHeight}
				alt={props.altText ?? ''}
			/>
		</figure>
	);
};

export const NewsletterCard = ({
	newsletter,
	groupTitle,
	cardPosition,
	carouselPosition,
}: Props) => {
	const [hasBeenSeen, setIsInViewRef] = useIsInView({ threshold: 0.9 });
	const [haveReportedBeingSeen, setHaveReportedBeingSeen] = useState(false);

	const reportSeen = useCallback(() => {
		const record = getOphanRecordFunction();
		const valueData = {
			eventDescription: 'card-viewed',
			newsletterId: newsletter.identityName,
			carousel: groupTitle,
			cardPosition,
			carouselPosition,
			timestamp: Date.now(),
		};

		submitComponentEvent(
			{
				component: {
					componentType: 'NEWSLETTER_SUBSCRIPTION', // TO DO - change to CONTAINER_CARD when Ophan package updated
					id: `DCR NewsletterCard ${newsletter.identityName}`,
				},
				action: 'VIEW',
				value: JSON.stringify(valueData),
			},
			record,
		);
	}, [cardPosition, carouselPosition, groupTitle, newsletter.identityName]);

	useEffect(() => {
		if (hasBeenSeen && !haveReportedBeingSeen) {
			reportSeen();
			setHaveReportedBeingSeen(true);
		}
	}, [
		hasBeenSeen,
		haveReportedBeingSeen,
		setHaveReportedBeingSeen,
		reportSeen,
	]);

	return (
		<article
			ref={setIsInViewRef}
			key={newsletter.name}
			css={groupItemStyle}
			aria-label={newsletter.name}
		>
			{newsletter.illustrationCard ? (
				<div css={illustrationStyle}>
					<CardPicture
						imageSize="carousel"
						alt=""
						master={newsletter.illustrationCard}
					/>
				</div>
			) : (
				<IllustrationPlaceholder
					theme={newsletter.theme}
					aspectHeight={300}
					aspectWidth={500}
				/>
			)}
			<div css={contentWrapperStyle}>
				<NewsletterDetail text={newsletter.frequency} />
				<h3>{newsletter.name}</h3>
				<p>{newsletter.description}</p>
				<div css={buttonHolderStyle}>
					<Button
						{...getButtonInitialAriaAttribute(newsletter.name)}
						priority="tertiary"
						size="xsmall"
						iconSide="left"
						icon={
							<>
								<span className={ICON_PLUS_CLASS}>
									<SvgPlus />
								</span>
								<span className={ICON_TICK_CLASS}>
									<SvgCheckmark />
								</span>
							</>
						}
						cssOverrides={buttonStyle}
						data-newsletter-id={newsletter.identityName}
						data-role={BUTTON_ROLE}
					>
						Sign up
					</Button>
				</div>
			</div>
		</article>
	);
};

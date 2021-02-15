import { css } from '@emotion/react';

import {
	MoustacheSection,
	MoustacheVariable,
	MoustacheTemplate,
	moustacheVariable,
} from '@root/src/amp/components/moustache';
import { headline, body, textSans } from '@guardian/src-foundations/typography';
import { brandAlt, neutral, opinion } from '@guardian/src-foundations/palette';

const epicStyle = css`
	border-top: 0.0625rem solid ${brandAlt[400]};
	background-color: ${neutral[97]};
	clear: left;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	padding: 0.25rem 0.3125rem 1rem;
`;
const epicHeaderStyle = css`
	font-size: 1.25rem;
	line-height: 1.4375rem;
	${headline.xxsmall()};
	text-rendering: optimizeLegibility;
	font-kerning: normal;
	font-variant-ligatures: common-ligatures;
	font-weight: 900;
	margin-bottom: 0.75rem;
	-webkit-font-smoothing: antialiased;
`;
const epicParagraphStyle = css`
	font-size: 1.1rem;
	display: block;
	margin-block-start: 0.5rem;
	margin-block-end: 0.5rem;

	${body.medium()};
	text-rendering: optimizeLegibility;
	font-kerning: normal;
	font-variant-ligatures: common-ligatures;
	-webkit-font-smoothing: antialiased;
	vertical-align: 0%;
	line-height: 1.5;
	&::selection {
		background-color: ${brandAlt[400]};
	}
	&:last-of-type {
		display: inline;
	}
`;
const highlightedTextStyle = css`
	font-size: 1.1rem;
	background-color: ${brandAlt[400]};
	padding: 0.125rem;
	margin-left: 5px;
	color: ${neutral[7]};
	${headline.xxxsmall({ fontWeight: 'bold' })};
	text-rendering: optimizeLegibility;
	font-kerning: normal;
	font-variant-ligatures: common-ligatures;
	-webkit-font-smoothing: antialiased;
	vertical-align: 0%;
	line-height: 1.5;
	display: inline;
`;
const supportButtonStyle = css`
	background-color: ${brandAlt[400]};
	color: ${neutral[7]};
	display: inline-block;
	${textSans.medium()};
	text-rendering: optimizeLegibility;
	font-kerning: normal;
	font-variant-ligatures: common-ligatures;
	-webkit-font-smoothing: antialiased;
	align-items: center;
	text-decoration: none;
	font-weight: 700;
	font-size: 1.1rem;
	height: 2.625rem;
	min-height: 2.625rem;
	padding: 0 1.3125rem;
	border: 0;
	border-radius: 1.3125rem;
	box-sizing: border-box;
	cursor: pointer;
	margin: 2rem 0.625rem 0.25rem 0;
	vertical-align: base;
	line-height: 2.625rem;
	transition: background-color 0.3s;
	text-align: centre;
	&:hover {
		background-color: ${opinion[600]};
	}
`;
const arrowStyle = css`
	margin-left: 0.5rem;
	position: relative;
	width: 1.3125rem;
	height: auto;
	display: inline;
	color: ${neutral[7]};
	vertical-align: sub;
`;
const acceptedPaymentMethodsWrapperStyle = css`
	margin-top: 0.5rem;
	margin-left: 0.5rem;
	display: block;
`;
const tickerWrapperStyle = css`
	margin-bottom: 20px;
`;
const leftStyle = css`
	text-align: left;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: flex-end;
`;
const rightStyle = css`
	text-align: right;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: flex-end;
`;
const tickerInfoStyle = css`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: space-between;
`;
const tickerProgressStyle = css`
	position: absolute;
	margin: 0;
	padding: 0;
	left: 0;
	background-color: ${brandAlt[400]};
	height: 100%;
	width: 100%;
	transform-origin: left;
`;
const tickerBackgroundStyle = css`
	overflow: hidden;
	position: relative;
	margin: 5px 0;
	height: 10px;
	width: 100%;
	background-color: ${neutral[86]};
	border: none;
`;
const topLeftStyle = css`
	${headline.xsmall({ fontWeight: 'bold' })}
`;
const topRightStyle = css`
	${headline.xxxsmall({ fontWeight: 'bold' })}
`;
const labelStyle = css`
	${body.small({ fontStyle: 'italic' })};
`;
const goalExceededMarkerStyle = css`
	width: 1px;
	height: 100%;
	border-left: 2px solid ${neutral[7]};
	position: absolute;
	top: 0;
	z-index: 2;
`;

interface ABTest {
	name: string;
	variant: string;
}

const buildUrl = (
	contributionsUrl: string,
	articleUrl: string,
	campaignCode: string,
	componentId: string,
	abTest: ABTest,
): string => {
	const acquisitionData = {
		source: 'GOOGLE_AMP',
		componentType: 'ACQUISITIONS_EPIC',
		componentId,
		campaignCode,
		abTest,
		referrerUrl: articleUrl,
	};
	return `${contributionsUrl}?INTCMP=${campaignCode}&acquisitionData=${JSON.stringify(
		acquisitionData,
	)}`;
};

export const Epic: React.FC<{ webURL: string }> = ({ webURL }) => {
	const epicUrl =
		process.env.GU_STAGE === 'PROD'
			? 'https://contributions.guardianapis.com/amp/epic?ampVariantAssignments=VARIANTS'
			: 'https://contributions.code.dev-guardianapis.com/amp/epic?ampVariantAssignments=VARIANTS';

	return (
		<div>
			<amp-list
				layout="fixed-height"
				// This means that if the user refreshes at the end of the article while the epic is in view then the epic
				// will not display. This is such an edge case that we can live with it, and in general it will fill the
				// space.
				height="1px"
				src={epicUrl}
				credentials="include"
				id="epic-container"
				single-item="true"
				items="."
			>
				<MoustacheTemplate>
					<div css={epicStyle}>
						<MoustacheSection name="ticker">
							<div css={tickerWrapperStyle}>
								<div css={tickerInfoStyle}>
									<div css={leftStyle}>
										<p css={topLeftStyle}>
											{moustacheVariable('topLeft')}
										</p>
										<p css={labelStyle}>
											{moustacheVariable('bottomLeft')}
										</p>
									</div>
									<div css={rightStyle}>
										<p css={topRightStyle}>
											{moustacheVariable('topRight')}
										</p>
										<p css={labelStyle}>
											{moustacheVariable('bottomRight')}
										</p>
									</div>
								</div>

								<div>
									<div css={tickerBackgroundStyle}>
										<MoustacheSection name="goalExceededMarkerPercentage">
											<div
												id="goal-exceeded-marker"
												css={goalExceededMarkerStyle}
												style={{
													left: `${moustacheVariable(
														'goalExceededMarkerPercentage',
													)}%`,
												}}
											/>
										</MoustacheSection>

										<div
											id="ticker-progress"
											css={tickerProgressStyle}
											style={{
												width: `${moustacheVariable(
													'percentage',
												)}%`,
											}}
										/>
									</div>
								</div>
							</div>
						</MoustacheSection>
						<h2 css={epicHeaderStyle}>
							<MoustacheVariable name="heading" />
						</h2>
						<MoustacheSection name="paragraphs">
							<p css={epicParagraphStyle}>
								<MoustacheVariable name="." />
							</p>
						</MoustacheSection>
						<span css={highlightedTextStyle}>
							<MoustacheVariable name="highlightedText" />
						</span>
						<br />
						<MoustacheSection name="cta">
							<a
								href={buildUrl(
									moustacheVariable('url'),
									webURL,
									moustacheVariable('campaignCode'),
									moustacheVariable('componentId'),
									{
										name: moustacheVariable('testName'),
										variant: moustacheVariable(
											'variantName',
										),
									},
								)}
								css={supportButtonStyle}
							>
								<MoustacheVariable name="text" />
								<svg
									css={arrowStyle}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 17.89"
									preserveAspectRatio="xMinYMid"
									aria-hidden="true"
									focusable="false"
								>
									<path d="M20 9.35l-9.08 8.54-.86-.81 6.54-7.31H0V8.12h16.6L10.06.81l.86-.81L20 8.51v.84z" />
								</svg>
							</a>
							<div css={acceptedPaymentMethodsWrapperStyle}>
								<amp-img
									layout="fixed"
									height="25px"
									width="176px"
									src="https://assets.guim.co.uk/images/acquisitions/2db3a266287f452355b68d4240df8087/payment-methods.png"
									alt="Accepted payment methods: Visa, Mastercard, American Express and PayPal"
								/>
							</div>
						</MoustacheSection>
					</div>
				</MoustacheTemplate>
			</amp-list>
		</div>
	);
};

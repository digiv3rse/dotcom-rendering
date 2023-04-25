import { css } from '@emotion/react';
import {
	headline,
	neutral,
	opinion,
	until,
} from '@guardian/source-foundations';
import { Link } from '@guardian/source-react-components';
import { generateSources, getFallbackSource } from './Picture';
import { QuoteIcon } from './QuoteIcon';

const scottAvatarStyles = css`
	width: 72px;
	height: 72px;
	border-radius: 100%;
	overflow: hidden;
	background-color: ${opinion[800]};
	flex-shrink: 0;
	${until.mobileLandscape} {
		margin-top: 5px;
		width: 70px;
	}
`;

const scottTextStyles = css`
	${headline.xxxsmall()}
	font-size: 14px;
	line-height: 16px;
	${until.leftCol} {
		margin-right: 10px;
	}
	${until.mobileLandscape} {
		margin-top: 35px;
		margin-right: 0px;
	}
`;

const quoteLineStyles = css`
	color: ${neutral[46]};
`;

const containerStyles = css`
	${until.leftCol} {
		display: flex;
		flex-direction: row-reverse;
		margin-top: -35px;
		${until.mobileLandscape} {
			justify-content: space-between;
		}
	}
`;

const textWrapStyle = css`
	${until.mobileLandscape} {
		display: inline-block;
	}
`;

export const CPScottHeader = () => {
	const sources = generateSources(
		'https://uploads.guim.co.uk/2023/04/12/CPScottcutout.png',
		[{ breakpoint: 320, width: 82 }],
	);
	const fallbackSource = getFallbackSource(sources);
	return (
		<>
			<div css={containerStyles}>
				<div css={scottAvatarStyles}>
					<img
						src={fallbackSource.lowResUrl}
						alt={'Portrait of CP Scott'}
						width="82px"
						height="auto"
					/>
				</div>
				<div css={scottTextStyles}>
					<div css={quoteLineStyles}>
						<div css={textWrapStyle}>
							<QuoteIcon colour={neutral[46]} />
							Comment is free&hellip;
						</div>
						<div css={textWrapStyle}>but facts are sacred</div>
					</div>
					<Link
						href={
							'http://www.theguardian.com/commentisfree/2002/nov/29/1'
						}
						cssOverrides={css`
							color: ${neutral[7]};
							text-decoration: none;
							${scottTextStyles}
						`}
					>
						CP Scott, 1921 Guardian editor
					</Link>
				</div>
			</div>
		</>
	);
};

import { css } from '@emotion/react';

import { space } from '@guardian/src-foundations';
import { border } from '@guardian/src-foundations/palette';
import { headline, textSans } from '@guardian/src-foundations/typography';
import { LinkButton } from '@guardian/src-button';

import { ShareIcons } from '@frontend/web/components/ShareIcons';
import { Badge } from '@frontend/web/components/Badge';
import { until } from '@guardian/src-foundations/mq';

const labelStyles = (palette: Palette) => css`
	${textSans.xsmall()};
	display: block;
	color: ${palette.text.subMetaLabel};
`;

const badgeWrapper = css`
	float: right;
	margin-top: 6px;
`;

const bottomPadding = css`
	padding-bottom: ${space[9]}px;
	${until.desktop} {
		padding-bottom: ${space[5]}px;
	}
`;

const listStyleNone = css`
	list-style: none;
`;

const listWrapper = css`
	padding-bottom: 12px;
	margin-bottom: 6px;
	border-bottom: 1px solid ${border.secondary};
`;

const listItemStyles = (palette: Palette) => css`
	margin-right: 5px;
	display: inline-block;
	a {
		position: relative;
		display: block;
		padding-right: 5px;
		text-decoration: none;
	}
	a::after {
		content: '/';
		position: absolute;
		pointer-events: none;
		top: 0;
		right: -3px;
		color: ${palette.text.subMetaLink};
	}
	a:hover {
		text-decoration: underline;
	}
`;

const linkStyles = (palette: Palette) => css`
	text-decoration: none;
	:hover {
		text-decoration: underline;
	}
	color: ${palette.text.subMeta};
`;

const sectionStyles = css`
	${headline.xxxsmall()};
`;

const keywordStyles = css`
	${textSans.small()};
`;

const hideSlash = css`
	a::after {
		content: '';
	}
`;

type Props = {
	palette: Palette;
	subMetaSectionLinks: SimpleLinkType[];
	subMetaKeywordLinks: SimpleLinkType[];
	pageId: string;
	webUrl: string;
	webTitle: string;
	showBottomSocialButtons: boolean;
	badge?: BadgeType;
};

const syndicationButtonOverrides = (palette: Palette) => css`
	> a {
		color: ${palette.text.syndicationButton};
		border-color: ${palette.border.syndicationButton};
		font-weight: normal;
	}
`;

export const SubMeta = ({
	palette,
	subMetaKeywordLinks,
	subMetaSectionLinks,
	pageId,
	webUrl,
	webTitle,
	showBottomSocialButtons,
	badge,
}: Props) => {
	const hasSectionLinks = subMetaSectionLinks.length > 0;
	const hasKeywordLinks = subMetaKeywordLinks.length > 0;
	return (
		<div data-print-layout="hide" css={bottomPadding}>
			{badge && (
				<div css={badgeWrapper}>
					<Badge
						imageUrl={badge.imageUrl}
						seriesTag={badge.seriesTag}
					/>
				</div>
			)}
			{(hasSectionLinks || hasKeywordLinks) && (
				<>
					<span css={labelStyles(palette)}>Topics</span>
					<div css={listWrapper}>
						{hasSectionLinks && (
							<ul css={listStyleNone}>
								{subMetaSectionLinks.map((link, i) => (
									<li
										css={[
											listItemStyles(palette),
											sectionStyles,
											i ===
												subMetaSectionLinks.length -
													1 && hideSlash,
										]}
										key={link.url}
									>
										<a
											css={linkStyles(palette)}
											href={link.url}
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						)}
						{hasKeywordLinks && (
							<ul css={listStyleNone}>
								{subMetaKeywordLinks.map((link, i) => (
									<li
										css={[
											listItemStyles(palette),
											keywordStyles,
											i ===
												subMetaKeywordLinks.length -
													1 && hideSlash,
										]}
										key={link.url}
									>
										<a
											css={linkStyles(palette)}
											href={link.url}
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						)}
					</div>
				</>
			)}
			{showBottomSocialButtons && (
				<div
					css={css`
						display: flex;
						justify-content: space-between;
					`}
				>
					<ShareIcons
						pageId={pageId}
						webTitle={webTitle}
						palette={palette}
						displayIcons={[
							'facebook',
							'twitter',
							'email',
							'linkedIn',
							'pinterest',
							'whatsApp',
							'messenger',
						]}
					/>
					<div css={syndicationButtonOverrides(palette)}>
						<LinkButton
							priority="tertiary"
							size="xsmall"
							data-link-name="meta-syndication-article"
							href={`https://syndication.theguardian.com/automation/?url=${encodeURIComponent(
								webUrl,
							)}&type=article&internalpagecode=${pageId}`}
							target="_blank"
							rel="noopener"
							title="Reuse this content"
						>
							Reuse this content
						</LinkButton>
					</div>
				</div>
			)}
		</div>
	);
};

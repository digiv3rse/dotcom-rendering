import { css } from '@emotion/react';
import { ArticleDesign } from '@guardian/libs';
import { breakpoints, from, textSans } from '@guardian/source-foundations';
import { trackSponsorLogoLinkClick } from '../client/ga/ga';
import { getOphanComponents } from '../lib/labs';
import { palette } from '../palette';
import type { Branding as BrandingType } from '../types/branding';
import { useConfig } from './ConfigContext';

const brandingStyle = css`
	padding-bottom: 10px;
`;

const labelStyle = css`
	${textSans.xxsmall()}
	color: ${palette('--branding-label-text')};

	a {
		color: inherit;
	}
`;

const liveBlogLabelStyle = css`
	color: ${palette('--standfirst-text')};

	${from.desktop} {
		color: ${palette('--branding-label-text')};
	}
`;

const brandingLogoStyle = css`
	padding: 10px 0;
	display: block;

	& img {
		display: block;
	}
`;

const aboutLinkStyle = css`
	${textSans.xxsmall()}
	display: block;
	text-decoration: none;

	color: ${palette('--branding-link-text')};
	a {
		color: inherit;
	}

	&:hover {
		text-decoration: underline;
	}
`;

/**
 * for liveblog smaller breakpoints article meta is located in the same
 * container as standfirst and needs the same styling as standfirst
 **/
const liveBlogAboutLinkStyle = css`
	color: ${palette('--standfirst-text')};

	${from.desktop} {
		color: ${palette('--branding-link-text')};
	}
`;

const imgStyles = (lightLogoWidth: number) => css`
	max-width: ${lightLogoWidth}px;
	height: fit-content;
`;

function decideLogo(
	branding: BrandingType,
	format: ArticleFormat,
	darkModeAvailable: boolean,
) {
	/** logoForDarkBackground is not required on branding,
	 *  so fallback to standard logo if not present */
	const maybeDarkLogo = branding.logoForDarkBackground ?? branding.logo;

	const isMedia =
		format.design === ArticleDesign.Video ||
		format.design === ArticleDesign.Audio;

	return (
		<picture>
			{/**
			 * For LiveBlogs, the background colour of the 'meta' section is light
			 * from desktop but dark below desktop. If the logo has a version designed for
			 * dark backgrounds, it should be shown on breakpoints below desktop.
			 */}
			{format.design === ArticleDesign.LiveBlog && (
				<source
					width={maybeDarkLogo.dimensions.width}
					height={maybeDarkLogo.dimensions.height}
					srcSet={encodeURI(maybeDarkLogo.src)}
					media={`(max-width: ${breakpoints.desktop - 1}px)`}
				/>
			)}
			{/** High contrast logo if dark mode available & dark mode logo exists for branding */}
			{darkModeAvailable && branding.logoForDarkBackground && (
				<source
					width={branding.logoForDarkBackground.dimensions.width}
					height={branding.logoForDarkBackground.dimensions.height}
					srcSet={encodeURI(branding.logoForDarkBackground.src)}
					media={'(prefers-color-scheme: dark)'}
				/>
			)}
			{/** Default to standard logo for light backgrounds */}
			{isMedia && branding.logoForDarkBackground ? (
				<img
					width={branding.logoForDarkBackground.dimensions.width}
					height={branding.logoForDarkBackground.dimensions.height}
					src={encodeURI(branding.logoForDarkBackground.src)}
					alt={branding.sponsorName}
					css={imgStyles(branding.logo.dimensions.width)}
				/>
			) : (
				<img
					width={branding.logo.dimensions.width}
					height={branding.logo.dimensions.height}
					src={encodeURI(branding.logo.src)}
					alt={branding.sponsorName}
					css={imgStyles(branding.logo.dimensions.width)}
				/>
			)}
		</picture>
	);
}

type Props = {
	branding: BrandingType;
	format: ArticleFormat;
};

/**
 * Wrapper around the logo and link for sponsored or paid for content.
 *
 * ## Why does this need to be an Island?
 *
 * So we can track sponsor logo clicks.
 *
 * ---
 *
 * (No visual story exists)
 */
export const Branding = ({ branding, format }: Props) => {
	const sponsorId = branding.sponsorName.toLowerCase();
	const isLiveBlog = format.design === ArticleDesign.LiveBlog;
	const { ophanComponentName, ophanComponentLink } = getOphanComponents({
		branding,
		locationPrefix: 'article-meta',
	});

	const { darkModeAvailable } = useConfig();

	return (
		<div css={brandingStyle}>
			<div css={[labelStyle, isLiveBlog && liveBlogLabelStyle]}>
				{branding.logo.label}
			</div>
			<div css={brandingLogoStyle}>
				<a
					href={branding.logo.link}
					data-sponsor={branding.sponsorName.toLowerCase()}
					rel="nofollow"
					aria-label={`Visit the ${branding.sponsorName} website`}
					onClick={() => trackSponsorLogoLinkClick(sponsorId)}
					data-testid="branding-logo"
					data-component={ophanComponentName}
					data-link-name={ophanComponentLink}
				>
					{decideLogo(branding, format, darkModeAvailable)}
				</a>
			</div>

			<a
				href={branding.aboutThisLink}
				css={[aboutLinkStyle, isLiveBlog && liveBlogAboutLinkStyle]}
			>
				About this content
			</a>
		</div>
	);
};

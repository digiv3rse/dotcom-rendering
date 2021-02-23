import React from 'react';
import { css } from 'emotion';

import { from, until } from '@guardian/src-foundations/mq';
import { space } from '@guardian/src-foundations';

type Props = {
	children: React.ReactNode;
	isMainMedia?: boolean;
	role?: RoleType;
	id?: string;
};

const roleCss = {
	inline: css`
		margin-top: ${space[3]}px;
		margin-bottom: ${space[3]}px;
	`,

	supporting: css`
		clear: left;
		margin-top: ${space[3]}px;
		margin-bottom: ${space[3]}px;
		${from.tablet} {
			position: relative;
			float: left;
			width: 300px;
			margin-right: 20px;
			line-height: 0;
			margin-top: ${space[2]}px;
		}
		${from.leftCol} {
			margin-left: -160px;
		}
		${from.wide} {
			width: 380px;
			margin-left: -240px;
		}
	`,

	immersive: css`
		margin-top: ${space[3]}px;
		margin-bottom: ${space[3]}px;
		${until.tablet} {
			margin-left: -20px;
			margin-right: -20px;
		}
		${until.mobileLandscape} {
			margin-left: -10px;
			margin-right: -10px;
		}
		${from.tablet} {
			margin-left: -20px;
			margin-right: -100px;
		}
		${from.desktop} {
			margin-left: -20px;
			margin-right: -340px;
		}
		${from.leftCol} {
			margin-left: -160px;
			margin-right: -320px;
		}
		${from.wide} {
			margin-left: -240px;
			margin-right: -400px;
		}
	`,

	showcase: css`
		margin-top: ${space[3]}px;
		margin-bottom: ${space[3]}px;
		position: relative;
		${from.leftCol} {
			margin-left: -160px;
		}
		${from.wide} {
			margin-left: -240px;
		}
	`,

	thumbnail: css`
		margin-top: ${space[2]}px;
		margin-bottom: ${space[2]}px;
		float: left;
		clear: left;
		width: 120px;
		margin-right: 20px;
		${from.tablet} {
			width: 140px;
		}
		${from.wide} {
			margin-left: -240px;
		}
		${from.leftCol} {
			position: relative;
			margin-left: -160px;
		}
	`,

	halfWidth: css`
		margin-top: ${space[3]}px;
		margin-bottom: ${space[3]}px;
		width: 50%;
		float: left;
		clear: left;
		margin-right: 16px;
	`,
};

const decidePosition = (role: RoleType) => {
	switch (role) {
		case 'inline':
			return roleCss.inline;
		case 'supporting':
			return roleCss.supporting;
		case 'immersive':
			return roleCss.immersive;
		case 'showcase':
			return roleCss.showcase;
		case 'thumbnail':
			return roleCss.thumbnail;
		case 'halfWidth':
			return roleCss.halfWidth;
		default:
			return roleCss.inline;
	}
};

export const Figure = ({
	role = 'inline',
	children,
	id,
	isMainMedia,
}: Props) => {
	if (isMainMedia) {
		// Don't add in-body styles for main media elements
		// TODO: If we want to support other element types having role position, such
		// as showcase twitter embeds, then we should remove the role positioning which
		// currently lives in ImageComponent and hoist it up to here, the same as we're
		// doing using decidePosition for in-body elements
		return <figure id={id}>{children}</figure>;
	}
	return (
		<figure id={id} className={decidePosition(role)}>
			{children}
		</figure>
	);
};

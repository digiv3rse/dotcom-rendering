import React from 'react';
import { css, cx } from 'emotion';
import TwitterIconPadded from '@guardian/pasteup/icons/twitter-padded.svg';
import FacebookIcon from '@guardian/pasteup/icons/facebook.svg';
import EmailIcon from '@guardian/pasteup/icons/email.svg';
import LinkedInIcon from '@guardian/pasteup/icons/linked-in.svg';
import PinterestIcon from '@guardian/pasteup/icons/pinterest.svg';
import WhatsAppIcon from '@guardian/pasteup/icons/whatsapp.svg';
import MessengerIcon from '@guardian/pasteup/icons/messenger.svg';
import { screenReaderOnly } from '@guardian/pasteup/mixins';
import { pillarPalette } from '@frontend/lib/pillars';

const pillarOverride = (pillar: Pillar, isCommentDesignType: Boolean) => {
    return isCommentDesignType
        ? pillarPalette['opinion'].main
        : pillarPalette[pillar].main;
};

const pillarFill = (pillar: Pillar, isCommentDesignType: Boolean) =>
    css`
        fill: ${pillarOverride(pillar, isCommentDesignType)};
    `;

const shareIconsListItem = css`
    padding: 0 3px 6px 0;
    display: inline-block;
    min-width: 32px;
`;

const shareIcon = (pillar: Pillar) => css`
    border: 1px solid ${pillarPalette[pillar].neutral.border};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 32px;
    max-width: 100%;
    width: auto;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    box-sizing: content-box;

    svg {
        height: 88%;
        width: 88%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        position: absolute;
    }

    :hover {
        background-color: ${pillarPalette[pillar].main};
        border-color: ${pillarPalette[pillar].main};
        fill: white;
    }
`;

interface ShareListItemType {
    id: SharePlatform;
    Icon: React.ComponentType;
    url: string;
    userMessage: string;
    mobileOnly: boolean;
}

export const ShareIcons: React.FC<{
    sharingUrls: {
        [K in SharePlatform]?: {
            url: string;
            userMessage: string;
        }
    };
    displayIcons: SharePlatform[];
    pillar: Pillar;
    isCommentDesignType?: Boolean;
    className?: string;
}> = ({
    sharingUrls,
    displayIcons,
    pillar,
    isCommentDesignType,
    className,
}) => {
    const icons: { [K in SharePlatform]?: React.ComponentType } = {
        facebook: FacebookIcon,
        twitter: TwitterIconPadded,
        email: EmailIcon,
        linkedIn: LinkedInIcon,
        pinterest: PinterestIcon,
        whatsApp: WhatsAppIcon,
        messenger: MessengerIcon,
    };

    const mobileOnlyIcons: SharePlatform[] = ['whatsApp', 'messenger'];

    const shareList = displayIcons.reduce((list: ShareListItemType[], id) => {
        const icon = icons[id];
        const sharingUrl = sharingUrls[id];

        if (icon && sharingUrl) {
            const listItem: ShareListItemType = Object.assign(
                {
                    id,
                    Icon: icon,
                    mobileOnly: mobileOnlyIcons.includes(id),
                },
                sharingUrl,
            );
            list.push(listItem);
        }

        return list;
    }, []);

    return (
        <ul className={className}>
            {shareList.map(shareListItem => {
                const { Icon, id, url, userMessage } = shareListItem;

                return (
                    <li className={shareIconsListItem} key={`${id}Share`}>
                        <a href={url} role="button">
                            <span
                                className={css`
                                    ${screenReaderOnly};
                                `}
                            >
                                {userMessage}
                            </span>
                            <span
                                className={cx(
                                    shareIcon(pillar),
                                    pillarFill(pillar, isCommentDesignType),
                                )}
                            >
                                <Icon />
                            </span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

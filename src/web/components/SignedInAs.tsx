import React from 'react';
import { css } from 'emotion';

import { text, border } from '@guardian/src-foundations/palette';
import { headline, textSans } from '@guardian/src-foundations/typography';
import { palette, space } from '@guardian/src-foundations';
import { until } from '@guardian/src-foundations/mq';

type Props = {
    commentCount: number;
    user?: UserProfile;
    isClosedForComments?: boolean;
};

const containerStyles = css`
    padding-top: ${space[1]}px;
    padding-bottom: ${space[1]}px;
`;

const imageStyles = css`
    border-radius: 70px;
    width: 60px;
    height: 60px;
    ${until.desktop} {
        width: 36px;
        height: 36px;
    }
`;

const imageWrapper = css`
    padding-bottom: ${space[1]}px;
    padding-right: ${space[2]}px;
`;

const headingStyles = css`
    ${headline.xxsmall({ fontWeight: 'bold' })};
    padding-bottom: ${space[1]}px;
`;

const textStyles = css`
    ${textSans.small()}
    ${until.desktop} {
        ${textSans.xsmall()}
    }
    color: ${text.supporting};
    padding-bottom: ${space[1]}px;
`;

const headlineStyles = css`
    ${headline.xxxsmall()}
    color: ${text.supporting};
    padding-bottom: ${space[1]}px;
`;

const usernameStyles = css`
    font-weight: 700;
    color: ${palette.neutral[7]};
`;

const linkStyles = css`
    color: ${palette.news[300]};
    text-decoration: none;
    border-bottom: 1px solid ${border.secondary};
    transition: border-color 0.15s ease-out;
    :hover {
        border-color: ${palette.news[300]};
    }
`;

const rowUntilDesktop = css`
    display: flex;
    flex-direction: column;
    ${until.desktop} {
        flex-direction: row;
    }
`;

export const SignedInAs = ({
    commentCount,
    user,
    isClosedForComments,
}: Props) => {
    return (
        <div className={containerStyles}>
            <h2 className={headingStyles}>
                comments{' '}
                <span
                    className={css`
                        color: ${palette.neutral[60]};
                    `}
                >
                    ({commentCount})
                </span>
            </h2>

            {/* Discussion open and user logged in */}
            {user && !isClosedForComments && (
                <div className={rowUntilDesktop}>
                    <div className={imageWrapper}>
                        <img
                            src={
                                user.secureAvatarUrl ||
                                'https://avatar.guim.co.uk/no-user-image.gif'
                            }
                            alt={user.displayName || 'Guardian User'}
                            className={imageStyles}
                        />
                    </div>
                    <div className={textStyles}>
                        Signed in as
                        <div className={usernameStyles}>
                            {user.displayName || 'Guardian User'}
                        </div>
                    </div>
                </div>
            )}

            {/* User is logged out (show this even if the discussion is closed) */}
            {!user && (
                <span className={headlineStyles}>
                    <a
                        href="https://profile.theguardian.com/signin?INTCMP=DOTCOM_COMMENTS_SIGNIN"
                        className={linkStyles}
                    >
                        Sign in
                    </a>{' '}
                    or{' '}
                    <a
                        href="https://profile.theguardian.com/register?INTCMP=DOTCOM_COMMENTS_REG"
                        className={linkStyles}
                    >
                        create your Guardian account
                    </a>{' '}
                    to join the discussion.
                </span>
            )}

            {/* The discussion is closed (only appears for logged in users) */}
            {user && isClosedForComments && (
                <span className={headlineStyles}>
                    This discussion is closed for comments
                </span>
            )}
        </div>
    );
};

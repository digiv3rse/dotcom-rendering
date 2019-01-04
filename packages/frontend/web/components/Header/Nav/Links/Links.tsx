import React from 'react';
import { css, cx } from 'emotion';

import Dropdown, {
    Link as DropdownLink,
} from '@guardian/guui/components/Dropdown/Dropdown';
import { palette } from '@guardian/pasteup/palette';
import { textSans } from '@guardian/pasteup/typography';
import { tablet, desktop } from '@guardian/pasteup/breakpoints';

import SupportTheGuardian from './SupportTheGuardian';

const search = css`
    :after {
        content: '';
        display: inline-block;
        width: 5px;
        height: 5px;
        transform: translateY(-2px) rotate(45deg);
        border-width: 1px;
        border-style: solid;
        border-color: currentColor;
        border-left: none;
        border-top: none;
        margin-left: 5px;
        vertical-align: middle;
        backface-visibility: hidden;
        transition: transform 250ms ease-out;
    }
    :hover:after {
        transform: translateY(0) rotate(45deg);
    }
`;

const link = ({ showAtTablet }: { showAtTablet: boolean }) => css`
    ${textSans(3)};
    color: ${palette.neutral[7]};
    float: left;
    position: relative;
    transition: color 80ms ease-out;
    text-decoration: none;
    display: none;

    :hover {
        text-decoration: underline;
    }

    :focus {
        text-decoration: underline;
    }

    ${tablet} {
        display: ${showAtTablet ? 'block' : 'none'};
    }

    ${desktop} {
        display: block;
    }
`;

const paddedLink = css`
    padding: 5px 10px;
    margin: 1px 0 0;
`;

const Search: React.SFC<{
    href: string;
    children: React.ReactChild;
    className?: string;
}> = ({ className, children, href, ...props }) => (
    <a href={href} className={cx(search, className)} {...props}>
        {children}
    </a>
);

const links = css`
    left: 0;
    top: 0;
    position: absolute;
    padding-left: 10px;
`;

const profileSubdomain = 'https://profile.theguardian.com';
const jobsUrl = 'https://jobs.theguardian.com/?INTCMP=jobs_uk_web_newheader';
const datingUrl =
    'https://soulmates.theguardian.com/?INTCMP=soulmates_uk_web_newheader';
const signInUrl = `${profileSubdomain}/signin?INTCMP=DOTCOM_NEWHEADER_SIGNIN&ABCMP=ab-sign-in`;

const identityLinks: DropdownLink[] = [
    {
        url: `${profileSubdomain}/user/id/123`, // TODO use actual user ID once we have a user model
        title: 'Comments and replies',
    },
    {
        url: `${profileSubdomain}/public/edit`,
        title: 'Public profile',
    },
    {
        url: `${profileSubdomain}/account/edit`,
        title: 'Account details',
    },
    {
        url: `${profileSubdomain}/email-prefs`,
        title: 'Emails and marketing',
    },
    {
        url: `${profileSubdomain}/membership/edit`,
        title: 'Membership',
    },
    {
        url: `${profileSubdomain}/contribution/recurring/edit`,
        title: 'Contributions',
    },
    {
        url: `${profileSubdomain}/digitalpack/edit`,
        title: 'Digital pack',
    },
    {
        url: `${profileSubdomain}/signout`,
        title: 'Sign out',
    },
];

const Links: React.SFC<{
    isPayingMember: boolean;
    isRecentContributor: boolean;
    isSignedIn: boolean;
    readerRevenueLinks: ReaderRevenueLinks;
}> = ({
    isPayingMember,
    isRecentContributor,
    isSignedIn,
    readerRevenueLinks,
}) => (
    <div className={links}>
        {isPayingMember ||
            isRecentContributor || (
                <SupportTheGuardian url={readerRevenueLinks.header.support} />
            )}
        <a
            href={readerRevenueLinks.header.subscribe}
            className={cx(link({ showAtTablet: true }), paddedLink)}
        >
            Subscribe
        </a>

        <a
            href={jobsUrl}
            className={cx(link({ showAtTablet: true }), paddedLink)}
        >
            Find a job
        </a>

        <a
            href={datingUrl}
            className={cx(link({ showAtTablet: false }), paddedLink)}
        >
            Dating
        </a>

        {isSignedIn ? (
            <div className={link({ showAtTablet: false })}>
                <Dropdown
                    label="My account"
                    links={identityLinks}
                    id="my-account"
                />
            </div>
        ) : (
            <a
                className={cx(link({ showAtTablet: true }), paddedLink)}
                href={signInUrl}
            >
                Sign in
            </a>
        )}

        <Search
            className={cx(link({ showAtTablet: false }), paddedLink)}
            href="https://www.google.co.uk/advanced_search?q=site:www.theguardian.com"
        >
            Search
        </Search>
    </div>
);

export default Links;

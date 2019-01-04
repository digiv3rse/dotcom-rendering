import React from 'react';
import { css } from 'emotion';
import { body, textSans } from '@guardian/pasteup/typography';
import { palette } from '@guardian/pasteup/palette';
import InnerContainer from './InnerContainer';
import { Link, footerLinksNew } from '@frontend/lib/footer-links';

const footer = css`
    background-color: ${palette.brand.blue};
    color: ${palette.neutral[86]};
    ${body(2)};
    margin-top: 20px;
`;

const footerInner = css`
    position: relative;
    padding-bottom: 6px;
`;

const footerLink = css`
    color: ${palette.neutral[100]};
    text-decoration: none;
    padding-bottom: 12px;
    display: block;

    :hover {
        color: ${palette.highlight.main};
    }
`;

const footerList = css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    padding-top: 12px;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(50% - 10px);
        width: 1px;
        display: block;
        background-color: rgba(255, 255, 255, 0.3);
    }

    ul {
        margin-right: 10px;
        width: calc(50% - 10px);
        margin-top: 0;
    }
`;

const copyrightContainer = css`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 12px;
    position: relative;
`;

const copyright = css`
    ${textSans(1)};
`;

const iconContainer = css`
    position: relative;
    float: right;
    margin-top: -6px;
    border-radius: 100%;
    background-color: ${palette.neutral[100]};
    cursor: pointer;
    height: 42px;
    min-width: 42px;
`;

const icon = css`
    :before {
        position: absolute;
        top: 6px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border: 2px solid ${palette.brand.blue};
        border-bottom: 0;
        border-right: 0;
        content: '';
        height: 12px;
        width: 12px;
        transform: rotate(45deg);
    }
`;

const backToTopLink = css`
    position: absolute;
    background-color: ${palette.brand.blue};
    color: ${palette.neutral[100]};
    font-weight: 700;
    top: -14px;
    right: 20px;
    padding: 0 5px;
`;

const backToTopText = css`
    display: inline-block;
    padding-right: 0.3125rem;
    padding-top: 3px;
`;

const FooterLinks: React.SFC<{
    links: Link[][];
}> = ({ links }) => {
    const linkGroups = links.map(linkGroup => {
        const ls = linkGroup.map(l => (
            <li key={l.url}>
                <a className={footerLink} href={l.url}>
                    {l.title}
                </a>
            </li>
        ));
        const key = linkGroup.reduce((acc, { title }) => `acc-${title}`, '');

        return <ul key={key}>{ls}</ul>;
    });

    return <div className={footerList}>{linkGroups}</div>;
};

const Footer: React.SFC = () => (
    <footer className={footer}>
        <InnerContainer>
            <div className={footerInner}>
                <FooterLinks links={footerLinksNew} />
            </div>
        </InnerContainer>
        <InnerContainer className={copyrightContainer}>
            <a className={backToTopLink} href="#top">
                <span className={backToTopText}>Back to top</span>
                <span className={iconContainer}>
                    <i className={icon} />
                </span>
            </a>
            <div className={copyright}>
                © 2018 Guardian News and Media Limited or its affiliated
                companies. All rights reserved.
            </div>
        </InnerContainer>
    </footer>
);

export default Footer;

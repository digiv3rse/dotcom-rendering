import React from 'react';

import {
    MoustacheSection,
    MoustacheVariable,
    MoustacheTemplate,
    moustacheVariable,
} from './primitives/moustache';
import { headline } from '@guardian/pasteup/typography';

import VideoIcon from '@guardian/pasteup/icons/video-icon.svg';
import Camera from '@guardian/pasteup/icons/camera.svg';
import VolumeHigh from '@guardian/pasteup/icons/volume-high.svg';
import Quote from '@guardian/pasteup/icons/quote.svg';
import Clock from '@guardian/pasteup/icons/clock.svg';
import { palette } from '@guardian/pasteup/palette';
import { css } from 'emotion';

const inner = css`
    padding-top: 3px;
    overflow: hidden;
    position: relative;
    border-top: 1px solid ${palette.neutral[86]};
    padding-bottom: 24px;
`;
const header = css`
    padding-bottom: 0.75rem;
    font-weight: 500;
    position: relative;
    ${headline(3)};
`;
const item = css`
    background-color: #ededed;
    border-top: 1px solid #dcdcdc;
    padding-left: 126px;
    position: relative;
    height: 75px;
    margin-bottom: 12px;
    overflow: hidden;
`;
const imageContainer = css`
    position: absolute;
    left: 0;
`;
const itemContent = css`
    min-height: 60px;
    padding: 0 5px;
    position: relative;
    overflow: hidden;
`;
const link = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    overflow: hidden;
    text-indent: 200%;
    white-space: nowrap;
    background: transparent;
`;
const headlineCSS = css`
    padding: 0;
    margin: 1px 0 0;
    font-weight: 500;
    word-wrap: break-word;
    ${headline(1)};
`;
export const OnwardContainer: React.SFC<{
    guardianBaseURL: string;
    path: string;
}> = ({ guardianBaseURL, path }) => (
    <amp-list
        layout="fixed-height"
        height="184"
        src={path}
        credentials="include"
    >
        <MoustacheTemplate>
            <MoustacheSection name="showContent">
                <div className={inner}>
                    <div className={header}>
                        <MoustacheVariable name="displayName" />
                    </div>
                    <MoustacheSection name="description">
                        {/*  Don't show if there is not description WHAT STYLES HERE */}
                        <div>
                            <MoustacheVariable name="description" />
                        </div>
                    </MoustacheSection>

                    <MoustacheSection name="content">
                        <MoustacheSection name="headline">
                            {/* Don't show if headline is empty */}
                            <div className={item}>
                                <div className={imageContainer}>
                                    <amp-img
                                        src={moustacheVariable('thumbnail')}
                                        layout="fixed"
                                        width="126"
                                        height="75"
                                    />
                                </div>
                                <div className={itemContent}>
                                    <div>
                                        <h2 className={headlineCSS}>
                                            <span>
                                                <MoustacheSection name="isVideo">
                                                    <VideoIcon />
                                                </MoustacheSection>
                                                <MoustacheSection name="isGallery">
                                                    <Camera />
                                                </MoustacheSection>
                                                <MoustacheSection name="isAudio">
                                                    <VolumeHigh />
                                                </MoustacheSection>
                                                <MoustacheSection name="isComment">
                                                    <Quote />
                                                </MoustacheSection>
                                            </span>
                                            <MoustacheVariable name="headline" />
                                        </h2>
                                        <MoustacheSection name="isComment">
                                            <div>
                                                <MoustacheVariable name="byline" />
                                            </div>
                                        </MoustacheSection>
                                    </div>
                                    <aside>
                                        <time>
                                            <MoustacheSection name="showWebPublicationDate">
                                                <Clock />
                                                <span>
                                                    <span>Published: </span>
                                                    <MoustacheVariable name="webPublicationDate" />
                                                </span>
                                            </MoustacheSection>
                                        </time>
                                    </aside>
                                </div>
                            </div>
                            <a
                                className={link}
                                // tslint:disable-line:react-a11y-anchors
                                href={
                                    guardianBaseURL + moustacheVariable('url')
                                }
                            >
                                <MoustacheVariable name="headline" />
                            </a>
                        </MoustacheSection>
                    </MoustacheSection>
                </div>
            </MoustacheSection>
        </MoustacheTemplate>
        {/* <div overflow={true}>
            <Plus />
        </div> */}
    </amp-list>
);

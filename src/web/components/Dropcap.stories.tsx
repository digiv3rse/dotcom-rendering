import React from 'react';
import { css } from 'emotion';

import { body } from '@guardian/src-foundations/typography';

import { DropCap } from './DropCap';

export default {
    component: DropCap,
    title: 'Components/DropCap',
};

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <div
        className={css`
            width: 620px;
            padding: 20px;
        `}
    >
        {children}
    </div>
);

export const Article = () => {
    return (
        <Container>
            <p
                className={css`
                    ${body.medium()};
                `}
            >
                <DropCap designType="Article" letter="O" pillar="news" />
                nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
        </Container>
    );
};
Article.story = { name: 'Article | news' };

export const Feature = () => {
    return (
        <Container>
            <p
                className={css`
                    ${body.medium()};
                `}
            >
                <DropCap designType="Feature" letter="O" pillar="culture" />
                nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
        </Container>
    );
};
Feature.story = { name: 'Feature | culture' };

export const PhotoEssay = () => {
    return (
        <Container>
            <p
                className={css`
                    ${body.medium()};
                `}
            >
                <DropCap designType="PhotoEssay" letter="O" pillar="sport" />
                nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
        </Container>
    );
};
PhotoEssay.story = { name: 'PhotoEssay | sport' };

export const Interview = () => {
    return (
        <Container>
            <p
                className={css`
                    ${body.medium()};
                `}
            >
                <DropCap designType="Interview" letter="O" pillar="lifestyle" />
                nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
        </Container>
    );
};
Interview.story = { name: 'Interview | lifestyle' };

export const Comment = () => {
    return (
        <Container>
            <p
                className={css`
                    ${body.medium()};
                `}
            >
                <DropCap designType="Comment" letter="O" pillar="opinion" />
                nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
        </Container>
    );
};
Comment.story = { name: 'Comment | opinion' };

export const CommentSport = () => {
    return (
        <Container>
            <p
                className={css`
                    ${body.medium()};
                `}
            >
                <DropCap designType="Comment" letter="O" pillar="sport" />
                nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
        </Container>
    );
};
CommentSport.story = { name: 'Comment | sport' };

export const CommentCulture = () => {
    return (
        <Container>
            <p
                className={css`
                    ${body.medium()};
                `}
            >
                <DropCap designType="Comment" letter="O" pillar="culture" />
                nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
        </Container>
    );
};
CommentCulture.story = { name: 'Comment | culture' };

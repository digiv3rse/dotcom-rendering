import React from 'react';
import { css } from 'emotion';

import { Donut } from './Donut';

export default {
    component: Donut,
    title: 'Components/Donut',
};

const ninetyNineToOne = [
    {
        value: 99,
        label: 'Dat1',
        color: '#ce070c ',
    },
    {
        value: 1,
        label: 'Dat2',
        color: '#ea770d ',
    },
];

const twoSections = [
    {
        value: 29,
        label: 'Dat1',
        color: '#eb121a',
    },
    {
        value: 71,
        label: 'Dat2',
        color: '#ce070c ',
    },
];

const threeSections = [
    {
        value: 29,
        label: 'Dat1',
        color: '#eb199a',
    },
    {
        value: 51,
        label: 'Dat2',
        color: '#ce070c ',
    },
    {
        value: 20,
        label: 'Dat3',
        color: '#ce770c ',
    },
];

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

export const NinetyNineToOne = () => {
    return (
        <Container>
            <Donut sections={ninetyNineToOne} />
        </Container>
    );
};
NinetyNineToOne.story = { name: 'with one section at 99 and the other at 1' };

export const Two = () => {
    return (
        <Container>
            <Donut sections={twoSections} />
        </Container>
    );
};
Two.story = { name: 'with two sections' };

export const Three = () => {
    return (
        <Container>
            <Donut sections={threeSections} />
        </Container>
    );
};
Three.story = { name: 'with three sections' };

export const Smaller = () => {
    return (
        <Container>
            <Donut
                sections={twoSections}
                percentCutout={20}
                width={200}
                height={200}
            />
        </Container>
    );
};
Smaller.story = { name: 'with props used to change size' };

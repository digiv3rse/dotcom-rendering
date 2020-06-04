import React from 'react';
import { css } from 'emotion';

import { headline } from '@guardian/src-foundations/typography';
import { text } from '@guardian/src-foundations/palette';

type Props = {
    sections: Section[];
    percentCutout?: number;
    width?: number;
    height?: number;
};

type Section = {
    label: string;
    value: number;
    color: string;
};

const unitStyles = css`
    ${headline.medium({ fontWeight: 'bold' })}
    text-anchor: middle;
`;

const valueStyles = css`
    ${headline.small({ fontWeight: 'bold' })}
    fill: ${text.ctaPrimary};
    text-anchor: middle;
`;

const labelStyles = css`
    ${headline.xxsmall()}
    fill: ${text.ctaPrimary};
    text-anchor: middle;
`;

const withoutZeroSections = (sections: Section[]) =>
    sections.filter(section => section.value !== 0);

export const Donut = ({
    sections,
    percentCutout = 35,
    width = 300,
    height = 300,
}: Props) => {
    if (withoutZeroSections(sections).length === 1) {
        // The Donut component requires at least 2 sections
        // TODO: Support showing 100% for a single section
        return null;
    }

    // TODO: Support displaying 0% for sections where value is zero
    // We handle these at the moment by filtering them out using withoutZeroSections()

    const radius = Math.min(height / 2, width / 2);
    const cutoutRadius = radius * (percentCutout / 100);

    const totalValue = sections
        .map(section => section.value)
        .reduce((runningTotal, currentValue) => runningTotal + currentValue);

    const halfPI = Math.PI / 2;
    const doublePI = Math.PI * 2;

    const center = {
        x: width / 2,
        y: height / 2,
    };

    // Segments
    const segments: any[] = [];
    let segmentAngle;
    let endRadius;
    let arc;
    let outer;
    let inner;
    let r;
    let a;
    let startRadius = -halfPI;

    withoutZeroSections(sections).forEach(section => {
        segmentAngle = (section.value / totalValue) * doublePI;

        endRadius = startRadius + segmentAngle;
        arc = (endRadius - startRadius) % doublePI > Math.PI ? 1 : 0;

        outer = {
            start: {
                x: center.x + Math.cos(startRadius) * radius,
                y: center.y + Math.sin(startRadius) * radius,
            },
            end: {
                x: center.x + Math.cos(endRadius) * radius,
                y: center.y + Math.sin(endRadius) * radius,
            },
        };
        inner = {
            start: {
                x: center.x + Math.cos(endRadius) * cutoutRadius,
                y: center.y + Math.sin(endRadius) * cutoutRadius,
            },
            end: {
                x: center.x + Math.cos(startRadius) * cutoutRadius,
                y: center.y + Math.sin(startRadius) * cutoutRadius,
            },
        };

        r = (cutoutRadius + radius) / 2;
        a = (startRadius + endRadius) / 2;

        segments.push({
            /**
             * M: Move pointer
             * A: Outer arc
             * L: Connect outer and inner arc
             * A: Inner arc
             * Z: Close path
             */
            d: [
                'M',
                outer.start.x,
                outer.start.y,
                'A',
                radius,
                radius,
                0,
                arc,
                1,
                outer.end.x,
                outer.end.y,
                'L',
                inner.start.x,
                inner.start.y,
                'A',
                cutoutRadius,
                cutoutRadius,
                0,
                arc,
                0,
                inner.end.x,
                inner.end.y,
                'Z',
            ].join(' '),
            label: section.label,
            value: section.value,
            transform: `translate(${Math.cos(a) * r + center.x}, ${Math.sin(a) *
                r +
                center.y})`,
            color: section.color,
        });

        startRadius += (section.value / totalValue) * doublePI;
    });

    return (
        <svg
            preserveAspectRatio="xMinYMin"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
        >
            {segments.map(segment => (
                <g>
                    <path d={segment.d} fill={segment.color} />
                    <text transform={segment.transform}>
                        <tspan className={labelStyles} x="0" dy="0">
                            {segment.label}
                        </tspan>
                        <tspan className={valueStyles} x="0" dy=".9em">
                            {segment.value}
                        </tspan>
                    </text>
                </g>
            ))}
            <text
                className={unitStyles}
                transform={`translate(${center.x}, ${center.y})`}
                dy="0.4em"
            >
                %
            </text>
        </svg>
    );
};

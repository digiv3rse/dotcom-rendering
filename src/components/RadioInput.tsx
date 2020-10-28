import type { SerializedStyles } from "@emotion/core";
import { css } from "@emotion/core";
import type { FormOption } from "@guardian/apps-rendering-api-models/formOption";
import { remSpace } from "@guardian/src-foundations";
import { textSans } from "@guardian/src-foundations/typography";
import { Radio, RadioGroup } from "@guardian/src-radio";
import React from "react";
import type { ReactElement } from "react";

interface RadioInputProps {
    name: string;
    label: string;
    options: FormOption[];
    cssOverrides: SerializedStyles;
}

const radioStyles = css`
    margin-bottom: ${remSpace[4]};
`;

const labelStyles = css`
    ${textSans.medium({ fontWeight: "bold" })};
`;

const RadioInput = (props: RadioInputProps): ReactElement => (
    <label css={labelStyles}>
        {props.label}
        <RadioGroup
            name={props.name}
            orientation="horizontal"
            cssOverrides={radioStyles}
        >
            {props.options.map(({ value, label }) => {
                return (
                    <Radio
                        key={value}
                        value={value}
                        label={label}
                        cssOverrides={props.cssOverrides}
                    />
                );
            })}
        </RadioGroup>
    </label>
);

export default RadioInput;

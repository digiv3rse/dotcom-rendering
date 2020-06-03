import React from 'react';
import { css } from 'emotion';

import { textSans } from '@guardian/src-foundations/typography';
import { neutral } from '@guardian/src-foundations/palette';

const fieldLabelStyles = css`
    ${textSans.medium({ fontWeight: 'bold' })}
`;

const fieldDescription = css`
    ${textSans.medium()}
`;

const optionalTextStyles = css`
    ${textSans.small({ fontStyle: 'italic' })}
    color: ${neutral[46]};
    padding-left: 5px;
`;

export const FieldLabel = ({
    formField,
}: {
    formField: CampaignsFeildType;
}) => (
    <label className={fieldLabelStyles} htmlFor={formField.name}>
        <div>
            {formField.label}
            {formField.required === '1' && (
                <span className={optionalTextStyles}>Optional</span>
            )}
        </div>
        {formField.description && (
            <div>
                <span className={fieldDescription}>
                    {`(${formField.description})`}
                </span>
            </div>
        )}
    </label>
);

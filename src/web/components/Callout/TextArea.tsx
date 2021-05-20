import React from 'react';
import { css } from 'emotion';

import { TextArea as SourceTextArea } from '@guardian/src-text-area';

const textAreaStyles = css`
	width: 100%;
`;

type Props = {
	formField: CampaignFieldTextArea;
	formData: { [key in string]: any };
	setFormData: React.Dispatch<React.SetStateAction<{ [x: string]: any }>>;
};

export const TextArea = ({ formField, formData, setFormData }: Props) => (
	<>
		<SourceTextArea
			data-testid={`form-field-${formField.id}`}
			label={formField.label}
			className={textAreaStyles}
			optional={!formField.required}
			value={formField.id in formData ? formData[formField.id] : ''}
			onChange={(e) =>
				setFormData({
					...formData,
					[formField.id]: e.target.value,
				})
			}
		/>
	</>
);

import { css } from '@emotion/react';
import { news, space } from '@guardian/source-foundations';
import { Button } from '@guardian/source-react-components';
import { useState } from 'react';
import { CalloutTermsAndConditions } from './CalloutTermsAndConditions';
import { FileUpload } from './FormFields/FileUpload';
import { MultiSelect } from './FormFields/MultiSelect';
import { Select } from './FormFields/Select';
import { TextArea } from './FormFields/TextArea';
import { TextInput } from './FormFields/TextInput';

const formStyles = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: ${space[2]}px;
	padding-right: ${space[2]}px;
`;

const formFieldWrapperStyles = css`
	display: flex;
	flex-direction: column;
`;

const footerPaddingStyles = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: ${space[4]}px;
`;

type FormDataType = { [key in string]: any };

type FormFieldProp = {
	formField: CampaignFieldType;
	formData: FormDataType;
	setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

const FormField = ({ formField, formData, setFormData }: FormFieldProp) => {
	switch (formField.type) {
		case 'textarea':
			return (
				<>
					<TextArea
						formField={formField}
						formData={formData}
						setFormData={setFormData}
					/>
					<hr />
				</>
			);
		case 'file':
			return (
				<>
					<FileUpload
						formField={formField}
						formData={formData}
						setFormData={setFormData}
					/>
					<hr />
				</>
			);
		case 'select':
			return (
				<>
					<Select
						formField={formField}
						formData={formData}
						setFormData={setFormData}
					/>
					<hr />
				</>
			);
		case 'checkbox':
		case 'radio':
			return (
				<>
					<MultiSelect
						formField={formField}
						formData={formData}
						setFormData={setFormData}
						multiple={formField.type === 'checkbox'}
					/>
					<hr />
				</>
			);
		default: {
			return (
				<>
					<TextInput
						formField={formField}
						formData={formData}
						setFormData={setFormData}
					/>
					<hr />
				</>
			);
		}
	}
};

type FormProps = {
	onSubmit: (formData: FormDataType) => void;
	formFields: CampaignFieldType[];
};

export const Form = ({ onSubmit, formFields }: FormProps) => {
	// const [twitterHandle, setTwitterHandle] = useState('');
	const [formData, setFormData] = useState<{ [key in string]: any }>({});

	return (
		<form
			action="/formstack-campaign/submit"
			method="post"
			css={formStyles}
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(formData);
			}}
		>
			<CalloutTermsAndConditions />

			{formFields.map((formField, index) => (
				<div
					css={formFieldWrapperStyles}
					// we use custom-guardian to find 1st field for accessibility
					// ideally we should useRef but need to wait for Source to
					// support React references
					custom-guardian="callout-form-field"
					key={index}
				>
					<FormField
						formField={formField}
						formData={formData}
						setFormData={setFormData}
					/>
				</div>
			))}
			<div css={footerPaddingStyles}>
				<Button
					priority="primary"
					type="submit"
					cssOverrides={css`
						background-color: ${news[300]};
					`}
				>
					Submit
				</Button>
				<div
					css={css`
						a,
						a:hover {
							border: 0;
						}
						text-align: right;
					`}
				></div>
			</div>
		</form>
	);
};

import { css, ThemeProvider } from '@emotion/react';
import { space } from '@guardian/source-foundations';
import {
	Checkbox,
	CheckboxGroup,
	Option,
	Radio,
	RadioGroup,
	Select,
	TextArea,
	TextInput,
} from '@guardian/source-react-components';
import { FileInput } from '@guardian/source-react-components-development-kitchen';
import type { CampaignFieldType } from '../../../types/content';
import { decidePalette } from '../../lib/decidePalette';

type FormDataType = { [key in string]: any };

type FormFieldProp = {
	validationErrors: { [key in string]: string };
	format: ArticleFormat;
	formField: CampaignFieldType;
	formData: FormDataType;
	setFieldInFormData: (
		id: string,
		data: string | string[] | undefined,
	) => void;
};

const formFieldStyles = css`
	margin-top: ${space[2]}px;
`;

export const FormField = ({
	format,
	formField,
	formData,
	setFieldInFormData,
	validationErrors,
}: FormFieldProp) => {
	const { type, label, hideLabel, description, required, id } = formField;

	const name = `field_${type}_${id}`;
	const fieldValue =
		formField.id in formData ? (formData[formField.id] as string) : '';
	const fieldError = validationErrors[formField.id];

	switch (formField.type) {
		case 'text': {
			return (
				<div css={formFieldStyles}>
					<TextInput
						name={name}
						label={label}
						hideLabel={hideLabel}
						supporting={description}
						optional={!required}
						value={fieldValue}
						error={fieldError}
						data-testid={`form-field-${formField.id}`}
						type={formField.type}
						onChange={(e): void =>
							setFieldInFormData(formField.id, e.target.value)
						}
					/>
				</div>
			);
		}
		case 'textarea':
			return (
				<div css={formFieldStyles}>
					<TextArea
						name={name}
						label={label}
						hideLabel={hideLabel}
						supporting={description}
						optional={!required}
						value={fieldValue}
						error={fieldError}
						data-testid={`form-field-${formField.id}`}
						onChange={(e): void =>
							setFieldInFormData(formField.id, e.target.value)
						}
					/>
				</div>
			);
		case 'file':
			return (
				<div css={formFieldStyles}>
					<ThemeProvider
						theme={{
							fileInput: {
								primary: decidePalette(format).text.richLink,
							},
						}}
					>
						<FileInput
							label={label}
							hideLabel={hideLabel}
							supporting={description}
							optional={!required}
							error={fieldError}
							data-testid={`form-field-${formField.id}`}
							onUpload={(file: string | undefined): void =>
								setFieldInFormData(formField.id, file)
							}
						/>
					</ThemeProvider>
				</div>
			);
		case 'select':
			return (
				<div css={formFieldStyles}>
					<Select
						name={name}
						label={label}
						hideLabel={hideLabel}
						supporting={description}
						optional={!required}
						value={fieldValue}
						error={fieldError}
						data-testid={`form-field-${formField.id}`}
						onChange={(e): void =>
							setFieldInFormData(formField.id, e.target.value)
						}
						children={[
							{
								value: 'default',
								label: 'Please choose an option',
							},
						]
							.concat(formField.options)
							.map(({ value, label }) => {
								return (
									<Option key={value} value={value}>
										{label}
									</Option>
								);
							})}
					/>
				</div>
			);
		case 'checkbox':
			return (
				<div css={formFieldStyles}>
					<CheckboxGroup
						name={name}
						label={label}
						hideLabel={hideLabel}
						supporting={description}
						error={fieldError ? fieldError : undefined}
						data-testid={`form-field-${formField.id}`}
					>
						{formField.options.map((option) => {
							const selectedCheckboxesArray: string[] =
								formData[formField.id] ?? [];

							const isCheckboxChecked =
								!!selectedCheckboxesArray.find(
									(ele: string) => ele === option.value,
								);

							const filterOutCheckboxFromArray = () =>
								selectedCheckboxesArray.filter(
									(ele: string) => ele !== option.value,
								);

							const addCheckboxToArray = () => [
								...selectedCheckboxesArray,
								option.value,
							];

							return (
								<Checkbox
									key={`form-field-${option.value}`}
									name={name}
									label={option.label}
									value={option.value}
									checked={isCheckboxChecked}
									error={fieldError ? true : false}
									data-testid={`form-field-${option.value}`}
									onChange={(): void =>
										setFieldInFormData(
											id,
											isCheckboxChecked
												? filterOutCheckboxFromArray()
												: addCheckboxToArray(),
										)
									}
								/>
							);
						})}
					</CheckboxGroup>
				</div>
			);
		case 'radio':
			return (
				<div css={formFieldStyles}>
					<RadioGroup
						label={formField.label}
						supporting={formField.description}
						error={validationErrors[formField.id]}
						name={formField.name}
						orientation={
							formField.options.length > 2
								? 'vertical'
								: 'horizontal'
						}
					>
						{formField.options.map((option) => {
							return (
								<Radio
									data-testid={`form-field-${option.value}`}
									key={`form-field-${option.value}`}
									label={option.label}
									value={option.value}
									name={`${formField.id}`}
									checked={
										formField.id in formData &&
										formData[formField.id] === option.value
									}
									onChange={(e): void =>
										setFieldInFormData(
											formField.id,
											e.target.value,
										)
									}
								/>
							);
						})}
					</RadioGroup>
				</div>
			);
		default:
			return null;
	}
};

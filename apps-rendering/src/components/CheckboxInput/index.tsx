import type { SerializedStyles } from '@emotion/react';
import type { FormField } from '@guardian/apps-rendering-api-models/formField';
import { Checkbox, CheckboxGroup } from '@guardian/source-react-components';
import type { ReactElement } from 'react';

interface CheckboxInputProps {
	formField: FormField;
	formData: { [key in string]: string[] };
	setFieldInFormData: (
		id: string,
		data: string | string[] | undefined,
	) => void;
	cssOverrides?: SerializedStyles;
}

const CheckboxInput = ({
	formField,
	formData,
	setFieldInFormData,
	cssOverrides,
}: CheckboxInputProps): ReactElement => {
	const { label, name, options, description, id } = formField;
	return (
		<CheckboxGroup
			id={name}
			label={label}
			name={name}
			supporting={description}
			cssOverrides={cssOverrides}
		>
			{options.map((option) => {
				const selectedCheckboxes = id in formData ? formData[id] : [];

				const isCheckboxChecked = !!selectedCheckboxes.find(
					(v: string) => v === option.value,
				);

				const filterOutCheckboxFromArray = (): string[] =>
					selectedCheckboxes.filter(
						(v: string) => v !== option.value,
					);

				const addCheckboxToArray = (): string[] => [
					...selectedCheckboxes,
					option.value,
				];

				return (
					<Checkbox
						label={option.label}
						value={option.value}
						key={option.value}
						checked={isCheckboxChecked}
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
	);
};

export default CheckboxInput;

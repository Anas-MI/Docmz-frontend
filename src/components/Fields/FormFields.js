import React from 'react';
import { Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

const CreateAntField = (AntComponent) => ({
	field,
	form,
	hasFeedback,
	label,
	selectOptions,
	submitCount,
	type,
	prefix,
	password,
	...props
}) => {
	const touched = form.touched[field.name];
	const submitted = submitCount > 0;
	const hasError = form.errors[field.name];
	const submittedError = hasError && submitted;
	const touchedError = hasError && touched;
	const onInputChange = ({ target: { value } }) => form.setFieldValue(field.name, value);
	const onChange = (value) => form.setFieldValue(field.name, value);
	const onBlur = () => form.setFieldTouched(field.name, true);
	return (
		<div className="field-container">
			<FormItem
				label={label}
				hasFeedback={(hasFeedback && submitted) || (hasFeedback && touched) ? true : false}
				help={submittedError || touchedError ? hasError : false}
				validateStatus={submittedError || touchedError ? 'error' : 'success'}
			>
				<AntComponent
					{...field}
					{...props}
					prefix={prefix}
					onBlur={onBlur}
					onChange={type ? onInputChange : onChange}
					type={password && 'password'}
				>
					{selectOptions && selectOptions.map((name) => <Option key={name}>{name}</Option>)}
				</AntComponent>
			</FormItem>
		</div>
	);
};

export const SelectField = CreateAntField(Select);

export const InputField = CreateAntField(Input);

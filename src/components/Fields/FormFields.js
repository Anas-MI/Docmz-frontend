import React from 'react';
import { Form, Input, Select , DatePicker , Upload ,Icon ,Modal} from 'antd';

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
					onBlur={ AntComponent === "DatePicker" ? onBlur : '' }
					onChange={type ? onInputChange : onChange}
					type={password && 'password'}
				>
					{selectOptions && selectOptions.map((name) => <Option key={name}>{name}</Option>)}
				</AntComponent>
			</FormItem>
		</div>
	);
};


const CreateAntFieldUpload = (AntComponent) => ({
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
	const onChange = (value) => {console.log({value})};
	const onBlur = () => form.setFieldTouched(field.name, true);
	return (
		<div className="field-container">
			<FormItem
				label={label}
				hasFeedback={(hasFeedback && submitted) || (hasFeedback && touched) ? true : false}
				help={submittedError || touchedError ? hasError : false}
				validateStatus={submittedError || touchedError ? 'error' : 'success'}
			>
				
				<Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          
			</FormItem>
		</div>
	);
};


const CreateAntFieldNumber= (AntComponent) => ({
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
	const onChange = ({ target: { value } }) => {
		const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
		if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
			form.setFieldValue(field.name, value);
		}
		
	} 
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
					onChange={ onChange}
					
				>
					{selectOptions && selectOptions.map((name) => <Option key={name}>{name}</Option>)}
				</AntComponent>
			</FormItem>
		</div>
	);
};




export const SelectField = CreateAntField(Select);
export const InputField = CreateAntField(Input);
export const DatePickerField = CreateAntField(DatePicker);
export const UploadField = CreateAntFieldUpload(Upload);
export const InputNumberField = CreateAntFieldNumber(Input)
import React from 'react';
import './input.style.css';

// Formik
import { ErrorMessage, useField } from 'formik';

// Code
const InputComponent = ({ ...props }) => {
	const { label, type = 'text', name, placeholder } = props;
	const [field, meta] = useField(props);

	return (
		<div className='input-wrapper'>
			<div className='input-container'>
				<label htmlFor={name} className='input-label'>
					{label}
				</label>
				<input
					autoComplete='false'
					{...field}
					type={type}
					name={name}
					className={`input-field ${
						meta.touched && meta.error && 'error-input'
					}`}
					placeholder={placeholder}
				/>
			</div>
			<ErrorMessage
				className='form-input-error'
				component='div'
				name={field.name}
			/>
		</div>
	);
};

export default InputComponent;

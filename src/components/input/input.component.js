import React from 'react';
import './input.style.css';

// Formik
import { useField } from 'formik';

// Code
const InputComponent = ({ ...props }) => {
	const { label, type = 'text', name, placeholder } = props;
	const [field, meta] = useField(props);

	return (
		<div className='input-container'>
			<label htmlFor={name} className='input-label'>
				{label}
			</label>
			<input
				autoComplete='false'
				{...field}
				type={type}
				name={name}
				className='input-field'
				placeholder={placeholder}
			/>
		</div>
	);
};

export default InputComponent;

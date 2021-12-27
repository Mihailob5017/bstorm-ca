import React from 'react';
import './form.style.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleModal, addTodo } from '../../redux/actions';

// Formik
import { Formik, Form } from 'formik';
import * as YupObject from 'yup';

// Components
import Input from '../input/input.component';

// Code
const FormComponent = () => {
	const singleTodo = useSelector((state) => state.singleTodo);
	const dispatch = useDispatch();

	const closeForm = () => {
		dispatch(setVisibleModal(''));
	};

	return (
		<Formik
			initialValues={{
				title: singleTodo.title,
				body: singleTodo.body,
				date: singleTodo.date,
			}}
			onSubmit={(values) => {
				dispatch(addTodo(values));
			}}
		>
			{(formik) => {
				return (
					<Form className='form-wrapper'>
						<h1 className='form-header'>Add Todo</h1>
						<Input
							label='Title'
							placeholder='Something you need to get done'
							name='title'
						/>
						<Input
							label='Text'
							placeholder='A brief summary of the todo'
							name='body'
						/>
						<Input label='Deadline' type='date' name='date' />
						<div className='form-btngroup'>
							<button type='submit' className='form-btn btn-submit'>
								Add to List
							</button>
							<button onClick={closeForm} className='form-btn btn-secondary'>
								Close Modal
							</button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormComponent;

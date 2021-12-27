import React from 'react';
import './form.style.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
	setVisibleModal,
	addTodo,
	editTodoComplete,
} from '../../redux/actions';

// Formik
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Components
import Input from '../input/input.component';

// Code
const FormComponent = ({ newId, isBeingEdited = false }) => {
	const singleTodo = useSelector((state) => state.singleTodo);
	const dispatch = useDispatch();

	const closeForm = () => {
		dispatch(setVisibleModal(''));
	};

	const validate = Yup.object({
		title: Yup.string()
			.min(3, 'Enter between 3 and 15 characters')
			.max(15, 'Enter between 3 and 15 characters'),
		body: Yup.string()
			.min(5, 'Enter between 5 and 20 characters')
			.max(20, 'Enter between 5 and 20 characters'),
	});

	return (
		<Formik
			initialValues={{
				id: isBeingEdited ? singleTodo.id : newId,
				title: singleTodo.title,
				body: singleTodo.body,
				date: singleTodo.date,
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				if (isBeingEdited) {
					dispatch(editTodoComplete(values));
				} else {
					dispatch(addTodo(values));
				}
			}}
		>
			{(formik) => {
				return (
					<Form className='form-wrapper'>
						<h1 className='form-header'>
							{!isBeingEdited ? 'Add ' : 'Edit '}Todo
						</h1>
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
							<button
								type='submit'
								className={`form-btn ${
									!isBeingEdited ? 'btn-submit' : 'btn-edit'
								}`}
							>
								{!isBeingEdited ? 'Add to List' : 'Edit Todo'}
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

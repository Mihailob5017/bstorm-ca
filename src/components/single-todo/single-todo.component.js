import React from 'react';
import './single-todo.style.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setVisibleModal } from '../../redux/actions';

// Moment
import moment from 'moment';

// Code
const SignleTodo = () => {
	const todo = useSelector((state) => state.singleTodo);
	const dispatch = useDispatch();

	const handleClick = () => dispatch(setVisibleModal(''));

	return (
		<div className='single-todo-wrapper'>
			<p className='single-todo-field'>
				<label className='single-todo-label'>Title:</label>
				{todo.title}
			</p>
			<p className='single-todo-field'>
				<label className='single-todo-label'>Body:</label>
				{todo.body}
			</p>
			<p className='single-todo-field'>
				<label className='single-todo-label'>Deadline:</label>
				{moment(todo.deadline).format('DD.MM.YYYY')}
			</p>
			<button onClick={handleClick} className='close-modal btn-secondary'>
				Close Modal
			</button>
		</div>
	);
};

export default SignleTodo;

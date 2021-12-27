import React from 'react';
import './todo.style.css';

// Moment
import moment from 'moment';

// Redux
import { useDispatch } from 'react-redux';
import { editTodoStart, deleteStart, getSingleTodo } from '../../redux/actions';

const TodoComponent = ({ id, body, title, date, num }) => {
	const dispatch = useDispatch();
	const handleEdit = () => {
		const values = {
			id,
			title,
			date,
			body,
		};
		dispatch(editTodoStart(values));
	};
	const handleDelete = () => {
		dispatch(deleteStart(id));
	};

	const handleView = (e) => {
		if (!e.target.className.includes('btn'))
			dispatch(getSingleTodo({ id, title, body, date }));
	};

	return (
		<div onClick={handleView} className='single-todo'>
			<h1 className='single-todo-num'>{num}</h1>
			<h1 className='single-todo-title'>{title}</h1>
			<h1 className='single-todo-date'>{moment(date).format('YYYY-MM-DD')}</h1>
			<div className='single-todo-group'>
				<button onClick={handleEdit} className='btn btn-edit'>
					Edit
				</button>
				<button onClick={handleDelete} className='btn btn-delete'>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TodoComponent;

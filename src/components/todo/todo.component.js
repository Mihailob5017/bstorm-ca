import React from 'react';
import './todo.style.css';

// Moment
import moment from 'moment';

// Redux
import { useDispatch } from 'react-redux';
import { editTodoStart } from '../../redux/actions';

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
	return (
		<div className='single-todo'>
			<h1 className='single-todo-num'>{num}</h1>
			<h1 className='single-todo-title'>{title}</h1>
			<h1 className='single-todo-date'>{moment(date).format('YYYY-MM-DD')}</h1>
			<div className='single-todo-btngroup'>
				<button onClick={handleEdit} className='btn btn-edit'>
					Edit
				</button>
				<button className='btn btn-delete'>Delete</button>
			</div>
		</div>
	);
};

export default TodoComponent;

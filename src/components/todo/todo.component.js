import React from 'react';
import './todo.style.css';

const TodoComponent = ({ title, date, num }) => {
	return (
		<div className='single-todo'>
			<h1 className='single-todo-num'>{num}</h1>
			<h1 className='single-todo-title'>{title}</h1>
			<h1 className='single-todo-date'></h1>
			<div className='single-todo-btngroup'>
				<button className='btn btn-edit'>Edit</button>
				<button className='btn btn-delete'>Delete</button>
			</div>
		</div>
	);
};

export default TodoComponent;

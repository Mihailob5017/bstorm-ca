import React from 'react';
import './pages.style.css';

// Components
import Todo from '../components/todo/todo.component';

// Redux
import { useSelector } from 'react-redux';
import {} from '../redux/actions';

// Code
const TodoPage = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<div className='todo-container'>
			{/* Search */}

			{/* Todo */}
			{todos.length > 0 ? (
				<>
					<div className='todos-header'>
						<h1 className='todo-num'>Num</h1>
						<h1 className='todo-title'>Title</h1>
						<h1 className='todo-date'>Get done by:</h1>
					</div>
					{todos.map((todo, i) => (
						<Todo key={i} num={i + 1} {...todo} />
					))}
					<button className='add-todo'>Add Todo</button>
				</>
			) : (
				<h1 className='no-todos'>No TODO's left. Hooray!</h1>
			)}
			{/* Add Button */}
		</div>
	);
};

export default TodoPage;

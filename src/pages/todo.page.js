import React, { useState } from 'react';
import './pages.style.css';

// Components
import Todo from '../components/todo/todo.component';
import Search from '../components/search/search.component';

// Redux
import { useSelector } from 'react-redux';
import {} from '../redux/actions';

// Code
const TodoPage = () => {
	const initialTodos = useSelector((state) => state.todos);
	const [todos, setTodos] = useState(initialTodos);
	const [searchValue, setSearchValue] = useState('');
	const searchHandler = (value) => {
		setSearchValue(value);
		setTimeout(() => {
			if (value === '') setTodos(initialTodos);
			else setTodos(todos.filter((el) => el.title.includes(value)));
		}, 500);
	};

	return (
		<div className='todo-container'>
			{todos.length > 0 ? (
				<>
					<Search value={searchValue} searchHandler={searchHandler} />
					<div className='todos-header'>
						<h1 className='todo-num'>Num</h1>
						<h1 className='todo-title'>Title</h1>
						<h1 className='todo-date'>Get done by:</h1>
					</div>
					{todos.map((todo, i) => (
						<Todo key={i} num={i + 1} {...todo} />
					))}
				</>
			) : (
				<h1 className='no-todos'>No TODO's left. Hooray!</h1>
			)}

			<button className='add-todo'>Add Todo</button>
		</div>
	);
};

export default TodoPage;

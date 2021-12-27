import React, { useState, useEffect } from 'react';
import './pages.style.css';

// Components
import Todo from '../components/todo/todo.component';
import Search from '../components/search/search.component';
import Modal from '../components/modals/modal.component';
import FormComponent from '../components/form/form.component';
import DeleteComponent from '../components/delete/delete.component';
import ViewComponent from '../components/single-todo/single-todo.component';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleModal } from '../redux/actions';

// Helper Function
const sortByDate = (todos = []) =>
	todos.length
		? todos.sort((a, b) => new Date(a.date) - new Date(b.date))
		: todos;

// Code
const TodoPage = () => {
	const initialTodos = useSelector((state) => state.todos);
	const modalSelected = useSelector((state) => state.modalSelected);
	const dispatch = useDispatch();

	const [todos, setTodos] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	// Had to add useEffect so that it notices once redux state changes
	useEffect(() => {
		setTodos(initialTodos);
	}, [initialTodos]);

	const searchHandler = (value) => {
		setSearchValue(value);
		setTimeout(() => {
			// If we dont have any value in the search bar,returns back the initial array
			if (value === '') setTodos(initialTodos);
			else setTodos(todos.filter((el) => el.title.includes(value)));
		}, 500);
	};
	const openModal = (value) => {
		dispatch(setVisibleModal(value));
	};

	return (
		<div className='todo-container'>
			<Search value={searchValue} searchHandler={searchHandler} />
			{todos.length > 0 ? (
				<>
					<div className='todos-header'>
						<h1 className='todo-num'>Num</h1>
						<h1 className='todo-title'>Title</h1>
						<h1 className='todo-date'>Get done by:</h1>
					</div>
					{sortByDate(todos).map((todo, i) => (
						<Todo key={i} num={i + 1} {...todo} />
					))}
				</>
			) : (
				<h1 className='no-todos'>No TODO's left</h1>
			)}

			<button onClick={() => openModal('add')} className='add-todo'>
				Add Todo
			</button>
			{modalSelected === 'add' ? (
				<Modal>
					<FormComponent newId={initialTodos.length} />
				</Modal>
			) : modalSelected === 'edit' ? (
				<Modal>
					<FormComponent isBeingEdited={true} />
				</Modal>
			) : modalSelected === 'delete' ? (
				<Modal>
					<DeleteComponent />
				</Modal>
			) : modalSelected === 'view' ? (
				<Modal>
					<ViewComponent />
				</Modal>
			) : (
				<></>
			)}
		</div>
	);
};

export default TodoPage;

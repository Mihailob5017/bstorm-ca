import React from 'react';
import './App.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { switchPage } from './redux/actions';

// Pages
import TodoPage from './pages/todo.page';
import QuotesPage from './pages/quotes.page';

// Code
const App = () => {
	const isTodoSelected = useSelector((state) => state.isTodoSelected);
	const dispatch = useDispatch();
	const switchPagesHandler = () => {
		dispatch(switchPage(!isTodoSelected));
	};

	return (
		<div className='content-wrapper'>
			<button onClick={switchPagesHandler} className='content-switch'>
				{isTodoSelected ? 'Motivate Me!' : 'I am Motivated!'}
			</button>
			{isTodoSelected ? <TodoPage /> : <QuotesPage />}
		</div>
	);
};

export default App;

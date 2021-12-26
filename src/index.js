import React from 'react';
import ReactDOM from 'react-dom';
// Css
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Components
import App from './App';

// Code
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

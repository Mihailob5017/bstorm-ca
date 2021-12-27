import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const middleware = [];

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

import {
	SWITCH_PAGE,
	GET_MOTIVATIONAL_QUOTES,
	SET_VISABLE_MODAL,
	ADD_TODO,
} from './types';

// Switch page we are one [ todo -> quotes ] and [ quotes -> todo ]
export const switchPage = (isTodoSelected) => ({
	type: SWITCH_PAGE,
	payload: isTodoSelected,
});

// Get quotes from API
export const getQuotes = (quotes) => ({
	type: GET_MOTIVATIONAL_QUOTES,
	payload: quotes,
});

// Open or close the modal
export const setVisibleModal = (modal) => ({
	type: SET_VISABLE_MODAL,
	payload: modal,
});

// Add todo to array and close the modal
export const addTodo = (todo) => ({
	type: ADD_TODO,
	payload: todo,
});

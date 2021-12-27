import {
	SWITCH_PAGE,
	GET_MOTIVATIONAL_QUOTES,
	SET_VISABLE_MODAL,
	ADD_TODO,
	EDIT_TODO_START,
	EDIT_TODO_COMPLETE,
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

// Open edit modal and fill it with data
export const editTodoStart = (todo) => ({
	type: EDIT_TODO_START,
	payload: todo,
});

// Replace data
export const editTodoComplete = (todo) => ({
	type: EDIT_TODO_COMPLETE,
	payload: todo,
});

import {
	SWITCH_PAGE,
	GET_MOTIVATIONAL_QUOTES,
	SET_VISABLE_MODAL,
	ADD_TODO,
	EDIT_TODO_START,
	EDIT_TODO_COMPLETE,
	DELETE_TODO_START,
	DELETE_TODO_COMPLETE,
	GET_SINGLE_TODO,
} from './types';

const initialState = {
	todos: [],
	quotes: [],
	singleTodo: { id: '', title: '', body: '', date: '' },
	isTodoSelected: true,
	modalSelected: '',
	deleteId: '',
};

// Helper functions
const replaceData = (todos = [], newTodo) => {
	return [...todos.filter((todo) => todo.id !== newTodo.id), newTodo];
};

const filterData = (todos = [], id) => {
	return [...todos.filter((todo) => todo.id !== id)];
};

// Reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_PAGE:
			return { ...state, isTodoSelected: action.payload };
		case GET_MOTIVATIONAL_QUOTES:
			return { ...state, quotes: [...action.payload] };
		case SET_VISABLE_MODAL:
			return {
				...state,
				modalSelected: action.payload,
				singleTodo: initialState.singleTodo,
			};
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
				modalSelected: '',
			};
		case EDIT_TODO_START:
			return { ...state, singleTodo: action.payload, modalSelected: 'edit' };
		case EDIT_TODO_COMPLETE:
			return {
				...state,
				singleTodo: initialState.singleTodo,
				todos: replaceData(state.todos, action.payload),
				modalSelected: '',
			};
		case DELETE_TODO_START:
			return { ...state, modalSelected: 'delete', deleteId: action.payload };

		case DELETE_TODO_COMPLETE:
			return {
				...state,
				modalSelected: '',
				todos: filterData(state.todos, state.deleteId),
				deleteId: '',
			};
		case GET_SINGLE_TODO:
			return { ...state, singleTodo: action.payload, modalSelected: 'view' };

		default:
			return state;
	}
};

export default reducer;

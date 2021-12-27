import {
	SWITCH_PAGE,
	GET_MOTIVATIONAL_QUOTES,
	SET_VISABLE_MODAL,
	ADD_TODO,
	EDIT_TODO_START,
	EDIT_TODO_COMPLETE,
} from './types';

const initialState = {
	todos: [],
	quotes: [],
	singleTodo: { id: '', title: '', body: '', date: '' },
	isTodoSelected: true,
	modalSelected: '',
};
const replaceData = (todos = [], newTodo) => {
	return [...todos.filter((todo) => todo.id !== newTodo.id), newTodo];
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_PAGE:
			return { ...state, isTodoSelected: action.payload };
		case GET_MOTIVATIONAL_QUOTES:
			return { ...state, quotes: [...action.payload] };
		case SET_VISABLE_MODAL:
			return { ...state, modalSelected: action.payload };
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
		default:
			return state;
	}
};

export default reducer;

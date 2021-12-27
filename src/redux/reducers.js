import {
	SWITCH_PAGE,
	GET_MOTIVATIONAL_QUOTES,
	SET_VISABLE_MODAL,
	ADD_TODO,
} from './types';

const initialState = {
	todos: [
		{
			title: 'Host a meeting',
			body: 'Host a meeting with directors of other firms',
			date: '',
		},
		{
			title: 'Clean House',
			body: 'Its bout time you clean the house',
			date: '',
		},
		{
			title: 'Pay Taxes',
			body: 'Your rent is coming due this week.Do something about it ',
			date: '',
		},
		{
			title: 'Get Wife Gift',
			body: 'Valentines day is near. Dont forget to get her the gift,twice',
			date: '',
		},
	],
	quotes: [],
	singleTodo: { title: '', body: '', date: '' },
	isTodoSelected: true,
	modalSelected: 'add',
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
		default:
			return state;
	}
};

export default reducer;

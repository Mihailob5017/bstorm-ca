import { SWITCH_PAGE, GET_MOTIVATIONAL_QUOTES } from './types';

const initialState = {
	todos: [],
	quotes: [],
	singleTodo: {},
	isTodoSelected: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_PAGE:
			return { ...state, isTodoSelected: action.payload };
		case GET_MOTIVATIONAL_QUOTES:
			return { ...state, quotes: [...action.payload] };
		default:
			return state;
	}
};

export default reducer;

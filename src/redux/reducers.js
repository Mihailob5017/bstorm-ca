import { SWITCH_PAGE } from './types';

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
		default:
			return state;
	}
};

export default reducer;

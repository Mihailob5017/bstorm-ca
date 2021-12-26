import { SWITCH_PAGE, GET_MOTIVATIONAL_QUOTES } from './types';

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

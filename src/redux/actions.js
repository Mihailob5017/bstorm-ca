import { SWITCH_PAGE } from './types';

// Switch page we are one [ todo -> quotes ] and [ quotes -> todo ]
export const switchPage = (isTodoSelected) => ({
	type: SWITCH_PAGE,
	payload: isTodoSelected,
});

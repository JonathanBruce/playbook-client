import searchState from '../states/search';
import { SEARCH } from 'js/constants/SEARCH';

/**
 * Boilerplate search reducer
 * @param  {object} state  Initial/current search state
 * @param  {object} action Which UI action is it triggering
 * @return {object}        Updated search state
 */
function search(state = searchState, action) {
	const type = action.type;

	switch (type) {
		case SEARCH.ACTIVATE_SEARCH:
			return Object.assign({}, state, {
				isUserSearching: true
			});
		case SEARCH.DEACTIVATE_SEARCH:
			return Object.assign({}, state, {
				isUserSearching: false
			});
		case SEARCH.RESET_SEARCH:
			return Object.assign({}, searchState);
		case SEARCH.RECEIVE_DATA:
			return Object.assign({}, state, {
				requestingData: false,
				searchData: action.data
			});
		case SEARCH.REQUEST_DATA:
			return Object.assign({}, state, {
				requestingData: true
			});
		default:
			return state;
	}
}

export default search;
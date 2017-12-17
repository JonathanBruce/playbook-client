import { SEARCH } from 'js/constants/SEARCH';

/** Class containing action functions for Search state modification */
class SearchActions {
	/**
	 * Activate search component
	 * @returns {object} Action
     */
	activateSearch() {
		return {
			type: SEARCH.ACTIVATE_SEARCH
		};
	}

	/**
	 * Deactivate search component
	 * @returns {object} Action
     */
	deactivateSearch() {
		return {
			type: SEARCH.DEACTIVATE_SEARCH
		};
	}

	/**
	 * Enters the requesting data state
	 * @param   {object} data Asynchronous server artist data
	 * @returns {object}      Action
	 */
	receiveData(data) {
		return {
			data,
			type: SEARCH.RECEIVE_DATA
		};
	}

	/**
	 * Resets search to default state
	 * @returns {object} action
	 */
	resetSearch() {
		return {
			type: SEARCH.RESET_SEARCH
		};
	}

	/**
	 * Enters the requesting data state
	 * @returns {object} Action
	 */
	requestData() {
		return {
			type: SEARCH.REQUEST_DATA
		};
	}
}

export default new SearchActions();
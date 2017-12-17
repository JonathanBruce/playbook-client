/* global test, expect */
import SearchActions from 'js/redux/actions/Search';
import { SEARCH } from 'js/constants/SEARCH';

test('validate activate search action payload', () => {
	const action = SearchActions.activateSearch();
	const expected = {
		type: SEARCH.ACTIVATE_SEARCH
	};

	expect(action).toEqual(expected);
});

test('validate deactivate search action payload', () => {
	const action = SearchActions.deactivateSearch();
	const expected = {
		type: SEARCH.DEACTIVATE_SEARCH
	};

	expect(action).toEqual(expected);
});

test('validate search data receive action payload', () => {
	const action = SearchActions.receiveData([]);
	const expected = {
		data: [],
		type: SEARCH.RECEIVE_DATA
	};

	expect(action).toEqual(expected);
});

test('validate search reset action payload', () => {
	const action = SearchActions.resetSearch();
	const expected = {
		type: SEARCH.RESET_SEARCH
	};

	expect(action).toEqual(expected);
});

test('validate search request action payload', () => {
	const action = SearchActions.requestData();
	const expected = {
		type: SEARCH.REQUEST_DATA
	};

	expect(action).toEqual(expected);
});
/* eslint-disable no-undefined */
/* global test, expect */
import searchReducer from 'js/redux/reducers/search';
import searchState from 'js/redux/states/search';
import { SEARCH } from 'js/constants/SEARCH';

test('initial state matches default state', () => {
	const reducer = searchReducer(undefined, {});

	expect(reducer).toEqual(searchState);
});

test('activate search sets isUserSearching to true', () => {
	const reducer = searchReducer({}, {
		type: SEARCH.ACTIVATE_SEARCH
	});

	expect(reducer).toEqual({ isUserSearching: true });
});

test('activate search sets isUserSearching to false', () => {
	const reducer = searchReducer({}, {
		type: SEARCH.DEACTIVATE_SEARCH
	});

	expect(reducer).toEqual({ isUserSearching: false });
});

test('receive data loads dummy data and sets requestingData to false', () => {
	const dummyValue = [ { test: 'value' } ];
	const reducer = searchReducer({}, {
		data: dummyValue,
		type: SEARCH.RECEIVE_DATA
	});

	expect(reducer).toEqual({
		requestingData: false,
		searchData: [ { test: 'value' } ]
	});
});

test('Reset search returns to default state', () => {
	const reducer = searchReducer({}, {
		type: SEARCH.RESET_SEARCH
	});

	expect(reducer).toEqual(searchState);
});

test('request data sets requestingData to true', () => {
	const reducer = searchReducer({}, {
		type: SEARCH.REQUEST_DATA
	});

	expect(reducer).toEqual({ requestingData: true });
});
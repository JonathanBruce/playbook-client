import { SEARCH } from 'js/constants/SEARCH';

const searchState = {
	isUserSearching: false,
	requestingData: false,
	searchString: '',
	searchData: SEARCH.DEFAULT_DATA
};

export default searchState;
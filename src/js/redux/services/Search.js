/* eslint-disable no-console */
/* global console */

import SearchActions from 'js/redux/actions/Search';
import { COPY } from 'js/constants/COPY';
import SearchData from 'js/data/Search';

class SearchService {
	searchArtists(query) {
		return (dispatch) => {
			if (query.length === 0 || query === COPY.TYPE_SOMETHING) {
				return;
			}

			dispatch(SearchActions.requestData());

			SearchData.getArtists(query).then((data = []) => {
				dispatch(SearchActions.receiveData(data.slice(0, 6)));
			}).catch((error) => {
				dispatch(SearchActions.receiveData([]));
				console.error(error);
			});
		};
	}
}

export default new SearchService();
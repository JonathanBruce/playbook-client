/* global window */
import {
	createStore
} from 'redux';
import reducers from 'js/redux/reducers/_all';

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
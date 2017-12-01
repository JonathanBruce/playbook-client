/* global document */

import 'sass/styles.scss';

import App from 'js/components/App';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'js/store';

const Application = (
	<Provider store={ store }>
		<Router>
			<Switch>
				<Route path='/' component={ App } />
			</Switch>
		</Router>
	</Provider>
);

ReactDOM.render(Application, document.getElementById('root'));
import App from 'js/components/App';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import React from 'react';
import store from 'js/store';
import { Provider } from 'react-redux';

class Routes extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<Router>
					<Route exact component={ App } />
				</Router>
			</Provider>
		);
	}
}

export default Routes;

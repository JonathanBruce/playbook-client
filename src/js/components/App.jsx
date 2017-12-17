import React from 'react';
import BaseComponent from 'js/extensions/BaseComponent';
import { connect } from 'react-redux';
import Header from 'js/components/Header';
import InstructionCatalogue from 'js/components/InstructionCatalogue';
import SearchActions from 'js/redux/actions/Search';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import { ROUTES } from 'js/constants/Routes';

const selector = (state) => {
	return {
		search: state.searchReducer
	};
};

class App extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			barSlider: 50
		};
		this.bindMethods('onSearchBlur', 'onSearchFocus');
	}

	onSearchBlur() {
		const { dispatch } = this.props;

		dispatch(SearchActions.deactivateSearch());
	}

	onSearchFocus() {
		const { dispatch } = this.props;

		dispatch(SearchActions.activateSearch());
	}

	render() {
		const { search } = this.props;
		const { isUserSearching } = search;

		return (
			<div className='playbook-container'>
				<Header
					onSearchBlur={ this.onSearchBlur }
					onSearchFocus={ this.onSearchFocus } 
					searchActive={ isUserSearching }/>
				<Switch>
					<Redirect exact from='/' to={ ROUTES.DASHBOARD } />
					<Route path={ ROUTES.DASHBOARD } component={ InstructionCatalogue } />
				</Switch>
			</div>
		);
	}
}

export default connect(selector)(App);
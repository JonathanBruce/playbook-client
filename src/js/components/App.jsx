import React from 'react';
import BaseComponent from 'js/extensions/BaseComponent';
import Header from 'js/components/Header';
import InstructionCatalogue from 'js/components/InstructionCatalogue';
import { Route } from 'react-router-dom';
import { ROUTES } from 'js/constants/Routes';

class App extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			barSlider: 50
		};
	}

	render() {
		return (
			<div className='playbook-container'>
				<Header />
				<Route path={ ROUTES.DASHBOARD } component={ InstructionCatalogue } />
			</div>
		);
	}
}

export default App;
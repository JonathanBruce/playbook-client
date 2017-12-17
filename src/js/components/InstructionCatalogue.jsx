import React from 'react';
import BaseComponent from 'js/extensions/BaseComponent';
import { Sidebar } from 'sidecat';
import structList from 'js/structs/search';

class InstructionCatalogue extends BaseComponent {
	constructor(props) {
		super(props);

		this.mockContent = [];

		for (let i = 0; i < 10; i++) {
			this.mockContent.push('Lorem Ipsem');
		}

		this.state = {};
		this.bindMethods('onSidebarChange');
	}

	onSidebarChange(name, value) {
		this.setState({
			[ name ]: value
		});
	}

	sidebarHandler(name, checked) {
		this.setState({
			[ name ]: checked
		});
	}

	render() {
		return (
			<div className='instruction-catalogue'>
				<div className='sidebar'>
					<Sidebar
						structList={ structList }
						onChange={ this.onSiderbarChange }
						valueState={ this.state }/>
				</div>

				<div className='catalogue'>
					{
						this.mockContent.map((copy, index) => {
							return (
								<div className='instruction-card' key={ index }>
									{ copy }
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default InstructionCatalogue;
import React from 'react';
import BaseComponent from 'js/extensions/BaseComponent';

class Header extends BaseComponent {
	render() {
		return (
			<div className='search-header'>
				<div className='search-bar'>
					Placeholder For Searchbar
				</div>

				<div className='about'>
					About
				</div>
			</div>
		);
	}
}

export default Header;
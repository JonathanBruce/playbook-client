import React from 'react';
import BaseComponent from 'js/extensions/BaseComponent';
import classnames from 'classnames';
import { COPY } from 'js/constants/COPY';

class Header extends BaseComponent {
	render() {
		const {
			onSearchBlur,
			onSearchChange,
			onSearchFocus,
			searchActive
		} = this.props;
		const searchClass = classnames('search-bar', {
			'is-searching': searchActive
		});

		return (
			<div className='search-header'>
				<div className={ searchClass }>
					<input
						onChange={ onSearchChange }
						onFocus={ onSearchFocus }
						onBlur={ onSearchBlur }
						placeholder={ COPY.SEARCH_EXAMPLES } />
				</div>

				<div className='about'>
					About
				</div>
			</div>
		);
	}
}

export default Header;
import React from 'react';
import BaseComponent from 'js/extensions/BaseComponent';
import { Models, Sidebar } from 'sidecat';

const nestedCategories = [
	new Models.CategoryModel({
		value: 'category1',
		label: 'Sam and Jon are the best',
		children: [
			new Models.CategoryModel({
				value: 'category1child1',
				label: 'Better than the rest',
				children: [
					new Models.CategoryModel({ value: 'category1child2sibling1', label: '100 100 100 100' }),
					new Models.CategoryModel({ value: 'category1child2sibling2', label: 'ez mode' })
				]
			})
		]
	}),
	new Models.CategoryModel({ value: 'category2', label: '#1 baby' })
];
const flatCategories = [
	new Models.CategoryModel({ value: 'category1', label: 'Sam and Jon are the best' }),
	new Models.CategoryModel({ value: 'category2', label: 'Better than the rest' })
];

const categoryOne = new Models.CategoriesModel({
	name: 'cat1',
	categories: flatCategories
});

const categoryTwo = new Models.CategoriesModel({
	name: 'cat2',
	categories: nestedCategories
});

const CheckBoxFoo = new Models.CheckBoxModel({
	label: 'foo',
	name: 'foo'
});
const SliderOne = new Models.SliderModel({
	label: 'foo slider',
	name: 'fooSlider',
	max: 100,
	min: 0
});
const SliderTwo = new Models.SliderModel({
	label: 'bar slider',
	name: 'barSlider',
	max: 100,
	min: 0
});

const checkBoxHandler = (name, checked) => {
	this.setState({
		[ name ]: checked
	});
};

const sliderDragChangeHandler = (name, value) => {
	this.setState({
		[ name ]: value
	});
};

const sliderDragEndHandler = (name, value) => {
	this.setState({
		[ name ]: value
	});
};

const structList = [
	CheckBoxFoo,
	SliderOne,
	SliderTwo,
	categoryOne,
	categoryTwo
];

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
				<Sidebar
					handleCheckBoxChange={ checkBoxHandler }
					handleSliderDragChange={ sliderDragChangeHandler }
					handleSliderDragEnd={ sliderDragEndHandler }
					structList={ structList }
					valueState={ this.state }/>
			</div>
		);
	}
}

export default App;
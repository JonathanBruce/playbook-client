import { Models } from 'sidecat';

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
	name: 'foo_slider',
	max: 100,
	min: 0
});
const SliderTwo = new Models.SliderModel({
	label: 'bar slider',
	name: 'barSlider',
	max: 100,
	min: 0
});

export default [
	SliderOne,
	SliderTwo,
	categoryOne,
	categoryTwo
];
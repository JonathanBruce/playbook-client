import { Models } from 'sidecat';

const flatCategories = [
	new Models.CategoryModel({ value: 'category1', label: 'Sorting Algorithms' }),
	new Models.CategoryModel({ value: 'category2', label: 'Search Algorithms' }),
	new Models.CategoryModel({ value: 'category2', label: 'Data Structures' })
];

const categoryOne = new Models.CategoriesModel({
	name: 'cat1',
	categories: flatCategories
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
	categoryOne
];
/* global module, require */
const autoprefixer = require('autoprefixer');
const flexboxfixer = require('postcss-flexboxfixer');
const gradientfixer = require('postcss-gradientfixer');

module.exports = {
	plugins: [
		autoprefixer,
		flexboxfixer,
		gradientfixer
	]
};
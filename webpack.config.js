/* global require, __dirname, module */
const path = require('path');
const autoprefixer = require('autoprefixer');
const devPort = 8080;
const distDir = path.join(__dirname, '/dist/');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const flexboxfixer = require('postcss-flexboxfixer');
const gradientfixer = require('postcss-gradientfixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const srcDir = path.join(__dirname, '/src');
const webpack = require('webpack');

function getVendorFileNames() {
	const packageJson = require('./package.json');

	return Object.keys(packageJson.dependencies);
}

module.exports = {
	entry: {
		app: path.join(srcDir, 'js', 'index.js'),
		vendor: getVendorFileNames()
	},
	devServer: {
		contentBase: distDir,
		port: devPort,
		hot: true
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
					{ loader: 'resolve-url-loader' }
				]
			},
			{
				exclude: /node_modules/,
				include: srcDir,
				test: /\.(jsx|js)?$/,
				use: [
					{ loader: 'babel-loader' }
				]
			},
			{
				exclude: /node_modules/,
				include: srcDir,
				test: /\.(jsx|js)?$/,
				enforce: 'pre',
				use: [
					{ loader: 'eslint-loader' }
				]
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: distDir
	},
	plugins: [
		new CleanWebpackPlugin([ 'dist' ]),
		new ExtractTextPlugin({
			filename: '[name].[contenthash].css'
		}),
		new HtmlWebpackPlugin({
			inject: 'body',
			hash: true,
			template: path.join(srcDir, 'index.template.ejs'),
			title: 'React SideCat Working Page'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.bundle.js'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		alias: {
			js: path.join(srcDir, 'js'),
			sass: path.join(srcDir, 'sass'),
			fonts: path.join(srcDir, 'fonts')
		},
		extensions: [ '.js', '.jsx' ]
	}
};

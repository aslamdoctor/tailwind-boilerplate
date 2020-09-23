const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'assets'),
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'assets/dist'),
	},

	plugins: [new MiniCssExtractPlugin()],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1, // 0-disabled, 1-postcss & 2-for postcss & sass
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [require('tailwindcss'), require('autoprefixer')],
							},
						},
					},
				],
			},
		],
	},
};

	const path = require('path');

	module.exports = {
  		entry: './background.js',
  		
		
		output: {
				path: './',
    			filename: 'background.js',
  		},
		module: {
			rules: [
				{
					test : /\.js$/,
					exclude: /node_modules/,
					loader : 'bable-loader'

				}
			]
		}
	};
 
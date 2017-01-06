module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js' 	//final output; o file index.html deve indicar este nome
	},
	resolve: {
		root: __dirname, 		//var fornecida pelo node js
		alias: { 				//path das components a criar; ao indicar o path aqui, basta indicar o nome da component, sem path
				Main: 	 'app/components/Main.jsx',
				Nav: 	 'app/components/Nav.jsx',
				Weather: 'app/components/Weather.jsx',
				WeatherForm: 'app/components/WeatherForm.jsx',
				WeatherMessage: 'app/components/WeatherMessage.jsx',
				About:   'app/components/About.jsx',
				Examples:'app/components/Examples.jsx',
				openWeatherMap:'app/api/openWeatherMap.jsx'
		},
		extensions: ['', '.js', '.jsx']  //Deixa de ser necessário indicar a extensão no require
	},
	module: { 							//Elementos extra necessários para utilizar ES6, babel em React
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'  //Source Maps (debugging)
};	
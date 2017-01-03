var React = require("react");

var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass(
{
	getInitialState: function()
	{
		return ({ isLoading: false });

		//var valor = qualValor; //this.refs.input1.value;
		//console.log("handleSearch   qualValor:::" + qualValor);
		//onSearch(valor);
	},
	handleSearch: function(location)
	{
		//console.log("location:::"  +  location);

		var that = this;
		//debugger;
		var valor = location;

		this.setState({ isLoading:true });

		//===============
		//NOTA: aqui volta-se a utilizar o '.then'
		openWeatherMap.getTemp(location).then(
			function(temp)
			{
				console.log('fUNC. handleSearch  temp::: ' + temp);

				that.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			},
			function(errorMessage)
			{
				console.log('errorMessage::: ' + errorMessage);
				that.setState({isLoading: false });
			}
		);
		//=============== COM => OPERATOR
		/*openWeatherMap.getTemp(location).then( (temp) => {
			//function(temp)
			//{
				console.log('=> handleSearch  temp::: ' + temp);

				this.setState({
					location: location,
					temp: temp
				});
			},
			(errorMessage) => {
			//function(errorMessage)
			//{
				console.log('errorMessage::: ' + errorMessage);
			}
		);*/
		//===============
		//this.setState({location: location,
		//				temp: 23
		//			});
	},
	render: function()
	{
		var {isLoading, temp, location} = this.state;

		function renderMessage()
		{
			//debugger;
			if(isLoading)
			{
				return (<h3>Fetching Weather...</h3>);

			} else if ( temp && location )
			{
				return (<WeatherMessage location={location} temp={temp}	/>);
			}
		}

		return (<div>
							<h3>123Weather Component</h3>
							<WeatherForm onSearch={this.handleSearch} />
							<hr />
							{renderMessage()}
				</div>)
	}
});

module.exports = Weather;

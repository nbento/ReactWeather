var React = require("react");

var WeatherForm 	=  require("WeatherForm");
var WeatherMessage 	=  require("WeatherMessage");
var openWeatherMap 	=  require("openWeatherMap");
var ErrorModal 		=  require("ErrorModal");

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
		console.log("WHEATHER  handleSearch  location:::"  +  location);

		var that = this;
		//debugger;
		var valor = location;

		this.setState({ 
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		 }); 

		//===============
		//NOTA: aqui volta-se a utilizar o '.then'
		openWeatherMap.getTemp(location).then(
			function(temp)
			{
 				console.log('WHEATHER  handleSearch  temp::: ' + temp);
				
				that.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			},
			function(e)
			{
				console.log('WHEATHER  handleSearch ERROR' + e.message);

				that.setState({
					isLoading: false,
					errorMessage: e.message
				});
				//alert('errorMessage::: ' + errorMessage);
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
	componentDidMount: function() 
	{
		var location = this.props.location.query.location;
		console.log('Wheather.jsx  componentDidMount  location:::' + this.props.location);
		console.log('Wheather.jsx  componentDidMount  location.query.location:::' + this.props.location.query.location);
		
		if ( location && location.length > 0 )
		{
			this.handleSearch(location);

			//Reset url
			window.location.hash = '#/';
		}
	},
	//............. QUANDO A PESQUISA É FEITA NA NAV.JSX
 	componentWillReceiveProps: function(newProps)
	{
		var location = newProps.location.query.location;
		//console.log('Wheather.jsx  componentWillMount  location:::' + this.props.location);
		
		if ( location && location.length > 0 )
		{
			this.handleSearch(location);

			//Reset url
			window.location.hash = '#/';
		}
	},
	render: function()
	{
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage()
		{
			//debugger;
			if(isLoading)
			{
				return (<h3 className="text-center">Fetching Weather...</h3>);

			} else if ( temp && location )
			{
				return (<WeatherMessage location={location} temp={temp}	/>);
			}
		}

		function renderError()
		{
			if( typeof errorMessage === 'string' )
			{
				return (<ErrorModal message={errorMessage} />)
			}	
		}	

		return (<div>
					<h1 className="text-center page-title">Get Weather</h1>
					<WeatherForm onSearch={this.handleSearch} />
					
					{renderMessage()}
					{renderError()}
				</div>)
	}
});

module.exports = Weather;

var React = require("react");
/*
var WeatherMessage = React.createClass(
{
	render: function()
	{
		var {temp, location} = this.props;

		return (<div>
					<h4>LOCATION:::{location}</h4>
					<p> WeatherMessage:::{temp}</p>
				</div>)
	}
});
*/

var WeatherMessage = (props) => { 
	var {temp, location} = props;

	return (<div>
				<h3 className="text-center">It s  {temp} in {location}</h3>
				
			</div>
			)
}

module.exports = WeatherMessage;

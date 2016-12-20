var React = require("react");

var WeatherForm = React.createClass(
{
	getValue: function(e)
	{
		e.preventDefault();
		var valor = this.refs.input1.value;
		//console.log("getValue   valor:::" + valor);
		this.props.onSearch(valor);

	},	
	render: function()
	{
		return (<div>
					<h3>WeatherForm Component</h3>
					<input type="text" ref="input1" />
					<button onClick={this.getValue} >Get Weather</button>
				</div>)
	}
});

module.exports = WeatherForm;
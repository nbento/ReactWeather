var React = require("react");



var WeatherForm = React.createClass(
{
	/*getValue: function(e)
	{
		e.preventDefault();
		var valor = this.refs.input1.value;
		//console.log("getValue   valor:::" + valor);
		this.props.onSearch(valor);

	},*/
	onFormSubmit: function(e)
	{
		e.preventDefault();
		var location = this.refs.location.value;
		
		if (location.length > 0) 
		{
			this.refs.location.value = '';
			this.props.onSearch(location);
		} else {
			alert('MISS VALUE!');
		}
	},	
	render: function()
	{
		return (<div>
					<form onSubmit={this.onFormSubmit}>
						
						<input type="text" ref="location" />
						<button className="button expanded hollow">Get Weather</button>
					</form>
				</div>)
	}
});
 
module.exports = WeatherForm;
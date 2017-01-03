var React = require('react');

var Nav = require('Nav');
/*
var Main = React.createClass(
{
	render: function()
	{
		return (<div>
					<h2>3 Title Main Component!!!</h2>
					 <Nav />
					{this.props.children}
				</div>)
	}
});
*/

/*var Main = (props) => {
	return (<div>
				<h2>4 Title Main Component!!!</h2>
				<Nav  />
				{props.children}
			</div>
		)
}
*/
var Main = React.createClass(
{
	mainHandleSearch: function(location)
	{
		alert('mainHandleSearch   location' + location);
	},
	render: function()
	{
		//<Nav navSearch={this.mainHandleSearch} />
		return (<div>
							<h2>4 Title Main Component!!!</h2>
							<Nav navSearch={this.mainHandleSearch} />
							{this.props.children}
						</div>
			)
	}
});
module.exports = Main;

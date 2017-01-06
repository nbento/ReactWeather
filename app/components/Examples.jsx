var React = require("react");
var {Link, IndexLink} = require('react-router');
/*
var Examples = React.createClass(
{
	render: function()
	{
		return (
				<h3>Examples Component</h3>
				)
	}
});
*/

var Examples = (props) => {
	return (<div>
				<h1 className="text-center page-title">2017.01.03 Examples</h1>
				<p>Here are a few example locations to try out:</p>
				<ol>
						<li>
							<Link to="/?location=Philadelphia">Philadelphia, PA</Link>
						</li>
						<li>
							<Link to="/?location=Rio">Rio, Brasil</Link>
						</li>
				</ol>
			</div>)
}

module.exports = Examples;

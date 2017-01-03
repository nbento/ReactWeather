var React = require('react');
var {Link, IndexLink} = require('react-router');
//ES5
//var Link 		= require('react-router').Link;
//var IndexLink 	= require('react-router').IndexLink;

var Nav = React.createClass({
		onSearch: function(e)
		{
				e.preventDefault();
				var valor = this.refs.search_weather.value;
				alert("-----------------" + valor);
				this.props.navSearch(valor);
				//this.props.onSearch(valor);

		},
		render: function()
		{
				return (
					<div className="top-bar">
						<div className="top-bar-left">
							<ul className="menu">
								<li className="menu-text">React Weather App</li>
								<li>
									<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>GET WEATHER</IndexLink>
								</li>
								<li>
									<Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>ABOUT</Link>
								</li>
								<li>
									<Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>EXAMPLES</Link>
								</li>
							</ul>
						</div>

						<div className="top-bar-right">
								<form onSubmit={this.onSearch}>
									<ul className="menu">
										<li>
												<input ref="search_weather" type="search" placeholder="Search weather" />
										</li>
										<li>
												<input type="submit" className="button" value="Get Weather" />
										</li>

									</ul>
								</form>
						</div>
					</div>
				);
		}
});


module.exports = Nav;

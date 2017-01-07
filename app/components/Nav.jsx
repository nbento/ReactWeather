var React = require('react');
var {Link, IndexLink} = require('react-router');
//ES5
//var Link 		= require('react-router').Link;
//var IndexLink 	= require('react-router').IndexLink;

var Nav = React.createClass({
		onSearch: function(e)
		{
				e.preventDefault();
				//........... 
				var location = this.refs.search_weather.value;
				console.log('Nav  location:::' + location);
				//........... ENCODE URL
				var encodedLocation = encodeURIComponent(location);
				//........... 
				if(location.length > 0) 
				{
					console.log('Nav  if(location.length > 0');
					console.log('Nav  encodedLocation:::' + encodedLocation);
					//........... Reset
					this.refs.search_weather.value = '';
					//........... 
					//Apenas este código, não funciona, na Weather.jsx.
					//Mas quando está em Examples.jsx, já funciona.
					//Isto acontece, porque quando já está na component
					//Wheather.jsx, o method componentDidMount, 
					//NÃO PODE DETECTAR, porque já ocorreu,
					//é preciso indicar que houve uma modificação posterior.
					//SOLUÇÃO: componentWillReceiveProps
					window.location.hash = "#/?location=" + encodedLocation;
					//........... 

				}
				
				//.......... EXAMPLES.JSX LINKS, == AOS BTN'S DO ROUTER
				//<Link to="/?location=Rio">Rio, Brasil</Link>
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
												<input ref="search_weather" type="search" placeholder="Search weather by city" />
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

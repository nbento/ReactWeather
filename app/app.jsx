var React 		= require('react');
var ReactDOM 	= require('react-dom');

//.......... ES5
/*	var Route 		= require('react-router').Route;
	var Router  	= require('react-router').Router;
	var IndexRoute 	= require('react-router').IndexRoute;
	var hashHistory = require('react-router').hashHistory;
*/	
//.......... ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//.......... 
var Main 	= require('Main');   
var Weather = require('Weather');
var About 	= require('About');
var Examples= require('Examples');

//Load foundation (CARREGA UM FILE CSS DIRECTA/ NUM FILE JSX(!!!))  (Lec.51 ~10:00)
//css! »»» 'by default the require doesn't know how to load a css file'; FORMA QUE PERMITE AO REQUIRE LOADAR UM CSS  
//style! »»» FORMA QUE injectar o css file no HTML
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render( 
			
			<Router history={hashHistory}>
				<Route path="/" component={Main}>
					<Route path="about" 	component={About} />
			  		<Route path="examples" 	component={Examples} />
			  		<IndexRoute component={Weather} /> 	
		  		</Route>
			</Router>,
				
		
		  
  	
  	
	
  document.getElementById('app')
);

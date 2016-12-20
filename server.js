//NR  -  'express' » NAME OF THE DEPENDENCIE
var express = require('express');

//Create app
var app = express();

//.use() » ADD FUNCTIONALITY TO THE APPLICATION
//'public' » FOLDER TO BE EXPOSED TO THE SERVER
app.use(express.static('public'));

//START SERVER
app.listen(3000, function () 
{
	console.log('Express server is on port 3000');
});
var axios = require('axios');

//NOTA: AQUI FOI RETIRADA A INFO DA CIDADE, QUE TEM DE SER DADA POSTERIORMENTE
//POR ISSO, NO FINAL, DEVE ADICIONAR-SE: ?q=CITY,uk (OU SÓ ?q=CITY)
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9c3461f332c4a35262aa70f267bc4f03&units=imperial';

//9c3461f332c4a35262aa70f267bc4f03

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=9c3461f332c4a35262aa70f267bc4f03
//http://api.openweathermap.org/data/2.5/weather?appid=9c3461f332c4a35262aa70f267bc4f03&units=imperial&q=lisbon
//http://api.openweathermap.org/data/2.5/weather?appid=9c3461f332c4a35262aa70f267bc4f03&units=imperial
//    ``
module.exports = {
	getTemp: function (location)
	{
		console.log("getTemp  location:::"  +  location);

		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		//var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=9c3461f332c4a35262aa70f267bc4f03&units=imperial&q=lisbon';
		
		
		return axios.get(requestUrl).then(
			function(res)
			{
				debugger;
				if( res.data.cod  &&  res.data.message )
				{
					throw new Error(res.data.message);
				}else{
					return res.data.main.temp;
				}	
			},
			function(res)
			{
				throw new Error(res.data.message);
			}
		);	
	}
}
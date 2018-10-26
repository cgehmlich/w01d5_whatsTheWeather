var whatsTheWeather = require('./whatsTheWeather');

var day = process.argv[2];

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : whatsTheWeather(day),
	e : "👀",
	T : "👅 "
}));

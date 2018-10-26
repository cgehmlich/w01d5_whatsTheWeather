var whatsTheWeather = require('./whatsTheWeather');
console.log(whatsTheWeather);
console.log(whatsTheWeather.shitStorm);

// console.log(module);

// console.log(whatsTheWeather('monday'));
// console.log(whatsTheWeather('funday'));

var day = process.argv[2];
console.log(whatsTheWeather.whatsTheWeather(day));

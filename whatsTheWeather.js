function whatsTheWeather(day) {
  switch (day.toUpperCase()) {
    case 'MONDAY':
      return '🌞🌻';
    case 'FRIDAY':
      return 'you\'re in love 😻';
    default:
      return '⛈️💩';
  }
}

exports.shitStorm = '⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩⛈️💩';
exports.whatsTheWeather = whatsTheWeather;
// exports;
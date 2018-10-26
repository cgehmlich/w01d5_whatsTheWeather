var something = {};

function whatsTheWeather(day) {
  switch (day.toUpperCase()) {
    case 'MONDAY':
      return '🌞🌻';
    case 'THORSDAY':
      return '🔨';
    case 'TODAY':
      return '🦄';
    case 'FRIDAY':
      return 'you\'re in love 😻';
    default:
      return '⛈️💩';
  }
}
module.exports = whatsTheWeather;

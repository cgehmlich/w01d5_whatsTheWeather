var assert = require('assert');
var whatsTheWeather = require('../whatsTheWeather');

describe('whatsTheWeather()', function() {
  it('should return 🌞🌻 when we pass in monday', function() {
    assert.equal(whatsTheWeather('monday'), '🌞🌻');
  });
  it('should return ⛈️💩 when we pass in funday', function() {
    assert.equal(whatsTheWeather('funday'), '⛈️💩');
  });
  it('should return you\'re in love 😻 when we pass in friday', function() {
    assert.equal(whatsTheWeather('friday'), 'you\'re in love 😻');
  });
  it('should return 🔨 when we pass in monday', function() {
    assert.equal(whatsTheWeather('Thorsday'), '🔨');
  });
  it('should return 🦄 when we pass in today', function() {
    assert.equal(whatsTheWeather('Today'), '🦄');
  });
});
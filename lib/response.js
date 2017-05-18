'use strict';

var _client$stream;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var schedule = require('node-schedule');
var client = require('./client');
var stream = client.stream('statuses/filter', (_client$stream = { track: 'şiir' }, _defineProperty(_client$stream, 'track', 'budizm'), _defineProperty(_client$stream, 'track', 'şair'), _client$stream));

var interactWithPeople = function interactWithPeople() {
  return schedule.scheduleJob('10 * * * * *', function () {
    stream.on('data', function (tweet) {
      client.post('favorites/create', { id: '' + tweet.id_str }, function (error, tweet, response) {
        if (error) {
          console.log(error);
        } else {
          console.log(tweet.text);
        }
      });
      client.post('statuses/update', { status: '@' + tweet.user.screen_name + ' ufkunuzu acacak guzel sozler icin bizi takip edin :)' }, function (error, response, tweet) {
        if (error) {
          console.log(error);
        }
      });
    });
  });
};

module.exports = interactWithPeople;
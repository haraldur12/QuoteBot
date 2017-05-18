'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interactWithPeople = undefined;

var _client$stream;

var _client = require('./client');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var schedule = require('node-schedule');

var stream = _client.client.stream('statuses/filter', (_client$stream = { track: 'şiir' }, _defineProperty(_client$stream, 'track', 'budizm'), _defineProperty(_client$stream, 'track', 'şair'), _client$stream));

// digits stand for seconds minutes hours days weeks and years
// if you want to send messages to users whom you are tracking you can
// just put 10 at the beginning which will send every minute when it is past 10 seconds

var interactWithPeople = function interactWithPeople() {
  return schedule.scheduleJob('* 10 * * * *', function () {
    stream.on('data', function (tweet) {
      _client.client.post('favorites/create', { id: '' + tweet.id_str }, function (error, tweet, response) {
        if (error) {
          console.log(error);
        } else {
          console.log(tweet.text);
        }
      });
      _client.client.post('statuses/update', { status: '@' + tweet.user.screen_name + ' ufkunuzu acacak guzel sozler icin bizi takip edin :)' }, function (error, response, tweet) {
        if (error) {
          console.log(error);
        }
      });
    });
  });
};

exports.interactWithPeople = interactWithPeople;
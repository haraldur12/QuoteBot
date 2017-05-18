'use strict';

var _data = require('./data');

var hashtag = require('./hashtag');
var schedule = require('node-schedule');
var client = require('./client');


var postQuotes = function postQuotes() {
  return schedule.scheduleJob('15 * * * * *', function () {
    if (_data.quoteToTweet !== undefined) {
      client.post('statuses/update', { status: _data.quoteToTweet + ' ' + hashtag }, function (error, tweet, response) {
        if (error) {
          console.log(error);
          console.log(_data.quoteToTweet);
        } else {
          console.log(_data.quoteToTweet);
        }
      });
    } else {
      console.log('Hala yeni bir soz bulamadim...');
    }
  });
};

module.exports = postQuotes;
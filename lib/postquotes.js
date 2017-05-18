'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postQuotes = undefined;

var _data = require('./data');

var hashtag = require('./hashtag');
var schedule = require('node-schedule');
var client = require('./client');

// It is set to post a tweet anytime when it is 15 past the hour.

var postQuotes = function postQuotes() {
  return schedule.scheduleJob('* 15 * * * *', function () {
    if (_data.quoteToTweet !== undefined) {
      // if you do not want to post a hashtag clear it.
      client.post('statuses/update', { status: _data.quoteToTweet + ' ' + hashtag }, function (error, tweet, response) {
        if (error) {
          console.log(error);
          console.log(_data.quoteToTweet);
        } else {
          console.log(_data.quoteToTweet);
        }
      });
    } else {
      console.log('No new quotes. I am yet to be defined.');
    }
  });
};

exports.postQuotes = postQuotes;
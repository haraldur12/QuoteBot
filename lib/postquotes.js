'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postQuotes = undefined;

var _client = require('./client');

var _data = require('./data');

var _imagify = require('./imagify');

var _hashtag = require('./hashtag');

var hashtag = require('./hashtag');
var schedule = require('node-schedule');

// It is set to post a tweet anytime when it is 15 past the hour.

var postQuotes = function postQuotes() {
  return schedule.scheduleJob('15 * * * * *', function () {
    if (_data.quoteToTweet !== undefined) {
      (0, _imagify.imagify)(_data.quoteToTweet, _imagify.postImage);
      (0, _hashtag.hashtagGenerator)(_data.quoteToTweet);
    } else {
      console.log('No new quotes. I am yet to be defined.');
    }
  });
};

exports.postQuotes = postQuotes;
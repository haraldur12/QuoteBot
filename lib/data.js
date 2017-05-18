'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var client = require('./client');
var fs = require('fs');

var quotes = 'quotes.txt';
var quoteData = [];
var quoteToTweet = void 0;

var dataGetter = function dataGetter() {

  var randomNum = Math.floor(Math.random() * 1000 + 1);
  fs.readFile(quotes, 'utf-8', function (error, data) {
    if (error) throw error;
    quoteData = data.split(/[\r\n]+/g);
    exports.quoteToTweet = quoteToTweet = quoteData[randomNum];
  });
};

exports.dataGetter = dataGetter;
exports.quoteToTweet = quoteToTweet;
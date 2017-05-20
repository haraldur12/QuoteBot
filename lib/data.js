'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var client = require('./client');
var fs = require('fs');
// you can add any text file you want to use with your bot
// so long as it has lines in it.
var quotes = 'quotes-tr.txt';
var quoteData = [];
var quoteToTweet = void 0;

var dataGetter = function dataGetter() {
  // make sure that the lines meet the random number otherwise quoteToTweet will be undefined
  var randomNum = void 0;
  fs.readFile(quotes, 'utf-8', function (error, data) {
    if (error) throw error;
    quoteData = data.split(/[\r\n]+/g);
    randomNum = Math.floor(Math.random() * quoteData.length + 1);
    exports.quoteToTweet = quoteToTweet = quoteData[randomNum];
  });
};

exports.dataGetter = dataGetter;
exports.quoteToTweet = quoteToTweet;
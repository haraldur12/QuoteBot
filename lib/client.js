'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Twitter = require('twitter');

require('dotenv').config();

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

exports.client = client;
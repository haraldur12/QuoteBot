'use strict';

var _response = require('./response.js');

var _postquotes = require('./postquotes');

var _data = require('./data');

var fs = require('fs');
var schedule = require('node-schedule');


// dataGetter sets the random quote that's why it runs every 50 seconds
setInterval(function () {
  (0, _data.dataGetter)();
}, 10000);

(0, _postquotes.postQuotes)();
(0, _response.interactWithPeople)();
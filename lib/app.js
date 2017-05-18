'use strict';

var _data = require('./data');

var fs = require('fs');
var schedule = require('node-schedule');
var interactWithPeople = require('./response');
var postQuotes = require('./postquotes');


setInterval(function () {
  (0, _data.dataGetter)();
}, 9000);

postQuotes();
interactWithPeople();
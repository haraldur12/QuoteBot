
const fs = require('fs');
const schedule = require('node-schedule');
const interactWithPeople = require('./response');
const postQuotes = require('./postquotes')
import {dataGetter} from './data';



setInterval(function(){
  dataGetter();
},9000);

postQuotes();
interactWithPeople();

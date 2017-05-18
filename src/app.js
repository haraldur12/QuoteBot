
const fs = require('fs');
const schedule = require('node-schedule');
const interactWithPeople = require('./response');
const postQuotes = require('./postquotes')
import {dataGetter} from './data';


// dataGetter sets the random quote that's why it runs every 50 seconds
setInterval(function(){
  dataGetter();
},50000);

postQuotes();
interactWithPeople();

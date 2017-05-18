
const fs = require('fs');
const schedule = require('node-schedule');
import { interactWithPeople} from './response.js'
import { postQuotes } from './postquotes';
import {dataGetter} from './data';


// dataGetter sets the random quote that's why it runs every 50 seconds
setInterval(function(){
  dataGetter();
},50000);

postQuotes();
interactWithPeople();

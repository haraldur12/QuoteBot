const client = require('./client');
const fs = require('fs');
// you can add any text file you want to use with your bot
// so long as it has lines in it.
const quotes = 'quotes.txt';
let quoteData = [];
let quoteToTweet;

const dataGetter = () => {
  // make sure that the lines meet the random number otherwise quoteToTweet will be undefined
  let randomNum = Math.floor((Math.random() * 1500) + 1);
    fs.readFile(quotes,'utf-8',(error,data)=> {
      if(error) throw error;
      quoteData = data.split(/[\r\n]+/g);
      quoteToTweet = quoteData[randomNum];
    });
};

export {dataGetter,quoteToTweet};

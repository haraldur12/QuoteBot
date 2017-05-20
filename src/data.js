const client = require('./client');
const fs = require('fs');
// you can add any text file you want to use with your bot
// so long as it has lines in it.
const quotes = 'quotes-tr.txt';
let quoteData = [];
let quoteToTweet;

const dataGetter = () => {
  // make sure that the lines meet the random number otherwise quoteToTweet will be undefined
  let randomNum;
    fs.readFile(quotes,'utf-8',(error,data)=> {
      if(error) throw error;
      quoteData = data.split(/[\r\n]+/g);
      randomNum = Math.floor((Math.random() * quoteData.length) + 1);
      quoteToTweet = quoteData[randomNum];
    });
};

export {dataGetter,quoteToTweet};

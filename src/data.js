const client = require('./client');
const fs = require('fs');

const quotes = 'quotes.txt';
let quoteData = [];
let quoteToTweet;

const dataGetter = () => {

  let randomNum = Math.floor((Math.random() * 1000) + 1);
    fs.readFile(quotes,'utf-8',(error,data)=> {
      if(error) throw error;
      quoteData = data.split(/[\r\n]+/g);
      quoteToTweet = quoteData[randomNum];
    });
};

export {dataGetter,quoteToTweet};

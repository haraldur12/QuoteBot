const hashtag = require('./hashtag');
const schedule = require('node-schedule');
const client = require('./client');
import {quoteToTweet} from './data';

const postQuotes = () =>  schedule.scheduleJob('15 * * * * *', () => {
  if(quoteToTweet !== undefined){
    client.post('statuses/update', {status: `${quoteToTweet} ${hashtag}` }, (error, tweet, response) => {
      if (error) {
        console.log(error);
        console.log(quoteToTweet)
      } else {
      console.log(quoteToTweet);
      }
    });
  } else {
  console.log('Hala yeni bir soz bulamadim...')
  }
});

module.exports = postQuotes;

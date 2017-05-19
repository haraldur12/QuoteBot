const hashtag = require('./hashtag');
const schedule = require('node-schedule');
import { client } from ('./client');
import { quoteToTweet } from './data';
// It is set to post a tweet anytime when it is 15 past the hour.

const postQuotes = () =>  schedule.scheduleJob('* 15 * * * *', () => {
  if(quoteToTweet !== undefined){
    // if you do not want to post a hashtag clear it.
    client.post('statuses/update', {status: `${quoteToTweet} ${hashtag}` }, (error, tweet, response) => {
      if (error) {
        console.log(error);
        console.log(quoteToTweet)
      } else {
      console.log(quoteToTweet);
      }
    });
  } else {
  console.log('No new quotes. I am yet to be defined.')
  }
});

export { postQuotes };

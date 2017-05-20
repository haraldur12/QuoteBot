const hashtag = require('./hashtag');
const schedule = require('node-schedule');
import { client } from './client';
import { quoteToTweet } from './data';
import { imagify , postImage } from './imagify';
import { hashtagGenerator } from './hashtag';
// It is set to post a tweet anytime when it is 15 past the hour.

const postQuotes = () =>  schedule.scheduleJob('15 * * * * *', () => {
  if(quoteToTweet !== undefined){
    imagify(quoteToTweet,postImage);
    hashtagGenerator(quoteToTweet);
  } else {
  console.log('No new quotes. I am yet to be defined.')
  }
});

export { postQuotes };

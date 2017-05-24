const schedule = require('node-schedule');
import { client } from './client'
const stream = client.stream('statuses/filter', {track: 'şiir',track :'budizm',track:'şair'});

// digits stand for seconds minutes hours days weeks and years
// if you want to send messages to users whom you are tracking you can
// just put 10 at the beginning which will send every minute when it is past 10 seconds

const interactWithPeople = () => schedule.scheduleJob('* * * 1 * *', () => {
  stream.on('data', function(tweet) {
    client.post('favorites/create',{id: `${tweet.id_str}`},(error,tweet,response) => {
      if (error) {
        console.log(error);
      } else {
      console.log(tweet.text);
    }});
    client.post('statuses/update', {status: `@${tweet.user.screen_name} ufkunuzu acacak guzel sozler icin bizi takip edin :)`},(error,response,tweet) => {
      if(error) {
        console.log(error);
      }
    });
  });
});

export { interactWithPeople };

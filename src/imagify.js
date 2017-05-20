const textToImage = require('./imageProcess/textToImage');
const fs = require('fs');
import { client } from './client';
import { hashtagGenerator } from './hashtag';

let image;

const imagify = (text,callback) => {
  textToImage.generate(text,{
  debug: false,
  maxWidth: 500,
  fontSize: 18,
  lineHeight: 30,
  margin: 5,
  bgColor: "#ffdb74",
  textColor: "#252010",
  fontFamily : "Raleway"
  }).then(function (dataUri) {
    const base64Data = dataUri.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("out.png", base64Data, 'base64', function(err) {
      if(err){
        console.log(err)
      } else {
        console.log("Image was created successfully.");
        image = fs.readFileSync('out.png');
        return callback(text);
      }
    });
  });
}

const postImage = (text) => {
  client.post('media/upload', {media : image}, (error,media,response) => {
    if (error) {
      console.log(error)
    } else {
      let status = {
      status : hashtagGenerator(text),
      media_ids: media.media_id_string // Pass the media id string
      }
      client.post('statuses/update', status, function(error, tweet, response) {
      if (!error) {
        console.log('image sent');
      }
    });
    }
  });
};




export { imagify, postImage };

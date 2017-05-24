'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postImage = exports.imagify = undefined;

var _client = require('./client');

var _hashtag = require('./hashtag');

var textToImage = require('./imageProcess/textToImage');
var fs = require('fs');


var image = void 0;

var imagify = function imagify(text, callback) {
  textToImage.generate(text, {
    debug: false,
    maxWidth: 500,
    fontSize: 18,
    lineHeight: 30,
    margin: 5,
    bgColor: "#090d00",
    textColor: "rgba(255,255,255,.25)",
    fontFamily: "Neuton"
  }).then(function (dataUri) {
    var base64Data = dataUri.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("out.png", base64Data, 'base64', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Image was created successfully.");
        image = fs.readFileSync('out.png');
        return callback(text);
      }
    });
  });
};

var postImage = function postImage(text) {
  _client.client.post('media/upload', { media: image }, function (error, media, response) {
    if (error) {
      console.log(error);
    } else {
      var status = {
        status: (0, _hashtag.hashtagGenerator)(text),
        media_ids: media.media_id_string // Pass the media id string
      };
      _client.client.post('statuses/update', status, function (error, tweet, response) {
        if (!error) {
          console.log('image sent');
        }
      });
    }
  });
};

exports.imagify = imagify;
exports.postImage = postImage;
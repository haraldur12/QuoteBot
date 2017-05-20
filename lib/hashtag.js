'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var hashtagGenerator = function hashtagGenerator(text) {
    text = text.split(' ').join(' #');
    return text.substr(0, 120);
};

exports.hashtagGenerator = hashtagGenerator;
// if you want to set an hashtag use it to modify.

const hashtagGenerator = (text) => {
    text = text.split(' ').join(' #')
    return text.substr(0,120);
};

export {hashtagGenerator};
// if you want to set an hashtag use it to modify.

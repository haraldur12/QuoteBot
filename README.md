# QuoteBot

QuoteBot uses [Twitter API](https://dev.twitter.com/rest/public) to post random tweets based on your quotes file. It reads one
line at a time and posts it to your account. Response.js is responsible for tracking users who post certain hashtags and sends them messages to follow you back. You can set the timer for your needs.

# Installation

1. You have to create a `.env`file first with the following settings to store your credentials.

    ```javascript
    TWITTER_CONSUMER_KEY=key
    TWITTER_CONSUMER_SECRET=secret
    TWITTER_ACCESS_TOKEN_KEY=token
    TWITTER_ACCESS_TOKEN_SECRET=token_secret
    ```

2. `npm install`
3. `npm run build`

# Running

* `npm start`  

# Modifications

Tasks are based on [Node Scheduler](https://github.com/node-schedule/node-schedule). You should refer to their API for timing your tasks.

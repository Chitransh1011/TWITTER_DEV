const express = require('express');
const connect = require('./config/database');
const app = express();


const Tweet = require('./models/tweet');
const { HashtagRepository } = require('./repository/hashtag-repository');
const { TweetRepository } = require('./repository/index');
const TweetService = require('./services/tweet-service');
// const HashtagRepository = require('./repository/index');
app.listen(3000, async () => {
    console.log(`Server Started on PORT : ${3000}`);
    await connect();
    console.log('Mongo db connected');
   
});

const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');

const Tweet = require('./models/tweet');
app.listen(3000, async () => {
    console.log(`Server Started on PORT : ${3000}`);
    await connect();
    console.log('Mongo db connected');
    const tweets  = await Tweet.find({
            content: ["First tweet","my tweet","new latest content"]
        
    });
    console.log(tweets);
});

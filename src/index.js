const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');

const Comment = require('./models/comment');

// const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log(`Server Started on PORT : ${3000}`);
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'Second tweet',
    //     userEmail: 'a@b.com'
    // });
    // const tweet = await Tweet.find();
    // const tweet = await Tweet.find({userEmail:'a@b.com'}); 
    // const tweet = await Tweet.findById('66ae35bdfe6aed3e47ec7537'); 
    // tweet.userEmail = 'b@c.com';
    // await tweet.save();
    // console.log(tweet);
    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update('66ae359eed61bb224c4610a4',{content: 'This is second tweet'});
    // const tweet = await tweetRepo.get('66ae35bdfe6aed3e47ec7537');

    // const tweet = await tweetRepo.create({content: 'my tweet'});
    // console.log(tweet);
    // tweet.comments.push({content: 'first comment'});
    // await tweet.save();
    // console.log(tweet);

    // const tweetRepo = new TweetRepository();
    // const tweet  = await tweetRepo.create({content: 'Tweet with comment schema'});
    // const comment  = await Comment.create({content: 'new comment'});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);


    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getWithComments('66b077ec73fe3bc6b2dcc26f');
    // console.log(tweet);


    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(2,4);
    // console.log(tweet);
    console.log(tweet[0].contentWithEmail);

});

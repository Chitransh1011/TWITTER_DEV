const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String
    },
    comments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
]
}, {timestamps: true} );

tweetSchema.virtual('contentWithEmail').get(function process(){
    return this.content + "\n" + "Created by: " + this.userEmail;
})

tweetSchema.pre('save',function(next){
    console.log('Inside a hook');
    next();
})
const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;
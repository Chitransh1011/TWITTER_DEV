import { TweetRepository, HashtagRepository } from '../repository/index.js'
class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async create(data){
        const content  = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g)
        .map((tag)=> tag.substring(1))
        .map(tag => tag.toLowerCase());//this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
        // todo create hashtags and add here
        /*
        1.bulkcreate in mongoose
        2.filter title of hashtag based on multiple tags
        3.How to add tweet id inside all the hashtags
        */
    }
}
export default TweetService;
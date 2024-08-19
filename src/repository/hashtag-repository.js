import Hashtag from '../models/hashtag.js';

class HashtagRepository{
    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async getWithComments(id){
        try {
            const tag = await Hashtag.findById(id).populate({path:'comments'}).lean();
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const tag = await Hashtag.findByIdAndDelete(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset,limit){
        try {
            const tag = await Hashtag.find().skip(offset).limit(limit);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
}
export default  HashtagRepository;
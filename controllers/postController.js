const PostModel = require('../models/postModel');
const UserModel = require('../models/userModel');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.createPost = async (req, res) => {
    const newPost = new PostModel({
        userId: req.body.userId,
        message: req.body.message,
        likers: [],
    });

    try {
        const post = await newPost.save();
        return res.status(201).json(post)
    }
    catch (err) {
        return res.status(400).send(err);
    }
};

module.exports.getAllPost = (req, res) => {
    PostModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error to get data : ' + err);
    })
};

module.exports.updatePost = (req, res) => {
    
};

module.exports.deletePost = (req, res) => {
    
};
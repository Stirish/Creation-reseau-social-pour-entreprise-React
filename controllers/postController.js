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
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);

    const updatedRecord = {
        message: req.body.message
    };

    PostModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log('Update error : ' + err);
        }
    )
};

module.exports.deletePost = (req, res) => {
    
};
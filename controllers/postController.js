const PostModel = require('../models/postModel');
const UserModel = require('../models/userModel');
const ObjectID = require('mongoose').Types.ObjectId;

// Creation d'une publication
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

// Récupération des informations de toute les publication
// Récupération des informations avec http://localhost:5000/api/post/
module.exports.getAllPost = (req, res) => {
    PostModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error to get data : ' + err);
    })
};

// Modification d'une publication
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

// Suppression d'une publication
module.exports.deletePost = (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);
    
    PostModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('Delete error : ' + err);
        }
    )
};

// Liker une publication
// On ajoute l'id de l'utilisateur dans le tableau 'likers' de la table Posts
// On ajoute l'id de de la publication dans le tableau 'likes' de la table Users
// .clone() a la fin des fonctions pour éviter un message d'erreur d'execution similaire
module.exports.likePost = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);

    try{
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.id }},
            { new: true },
            (err, docs) => {
                if (err) return res.status(400).send(err);
            }
        ).clone();
        await UserModel.findByIdAndUpdate(
            req.body.id,
            { $addToSet: { likes: req.params.id }},
            { new: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else return res.status(400).send(err);
            }
        ).clone();
    }
    catch (err) {
        return res.status(400).send(err);
    }
};

// Enlever le like d'une publication
// On retire l'id de l'utilisateur dans le tableau 'likers' de la table Posts
// On retire l'id de de la publication dans le tableau 'likes' de la table Users
// .clone() a la fin des fonctions pour éviter un message d'erreur d'execution similaire
module.exports.unlikePost = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);
    
    try{
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { likers: req.body.id }},
            { new: true },
            (err, docs) => {
                if (err) return res.status(400).send(err);
            }
        ).clone();
        await UserModel.findByIdAndUpdate(
            req.body.id,
            { $pull: { likes: req.params.id }},
            { new: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else return res.status(400).send(err);
            }
        ).clone();
    }
    catch (err) {
        return res.status(400).send(err);
    }
};
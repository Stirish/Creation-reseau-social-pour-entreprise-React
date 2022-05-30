const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { signUpErros, signInErros } = require('../utils/errorsUtils');
const ObjectID = require('mongoose').Types.ObjectId;
const maxAge =3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};

// Creation d'un Compte utilisateur
module.exports.signUp = async (req, res) => {
    const {lastName, firstName, email, password} = req.body

    try {
        const user = await UserModel.create({lastName, firstName, email, password });
         res.status(201).json({ user: user._id});
    }
    catch(err) {
        const errors = signUpErros(err);
        res.status(200).send({ errors })
    }
};

// Connection d'un utilisateur
module.exports.signIn = async (req, res) => {
    const { email, password} = req.body

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge});
        res.status(200).json({ user: user._id})
    }
    catch (err) {
        const errors = signInErros(err);
        res.status(200).json({ errors });
    }
};

module.exports.logout = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};



// Récupération des informations de tout les utilisateurs sans les mots de passe
// Récupération des informations avec http://localhost:5000/api/user/
module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};


// Récupération d'un utilisateur par son ID sans le mot de passe
// ID a mettre dans URL ex: http://localhost:5000/api/user/675462941671
module.exports.getOneUser = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknown : ' + err)
    }).select('-password')
};
const UserModel = require('../models/userModel');

module.exports.signUp = async (req, res) => {
    const {lastName, firstName, email, password} = req.body

    try {
        const user = await UserModel.create({lastName, firstName, email, password });
         res.status(201).json({ user: user._id});
    }
    catch(err) {
        console.log(err)
        res.status(200).send({ err })
    }
};
const router = require('express').Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');


// auth
router.post('/register', authController.signUp);

// user
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);

module.exports = router
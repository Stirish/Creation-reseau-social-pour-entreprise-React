const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/register', userController.signUp);
router.post('/login', userController.signIn);
router.get('/logout', userController.logout);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);


module.exports = router
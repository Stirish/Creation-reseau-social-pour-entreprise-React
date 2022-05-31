const router = require('express').Router();
const postController = require('../controllers/postController');
const multer = require('multer')
const upload = multer();

router.post('/', upload.single('file'), postController.createPost);
router.get('/', postController.getAllPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/likePost/:id', postController.likePost);
router.patch('/unlikePost/:id', postController.unlikePost);

module.exports = router
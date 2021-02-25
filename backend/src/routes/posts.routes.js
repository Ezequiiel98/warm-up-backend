const { Router } = require('express');

const { controllerWithTryCatch } = require('../helpers');
const { categoryExists } = require('../middlewares');
const PostsController = require('../controllers/posts.controller');

const router = Router();

const { PostsService } = require('../services');

const postsService = new PostsService();
const postsController = new PostsController(postsService);

router.route('/posts')
  .get(controllerWithTryCatch(postsController.getAll))
  .post(categoryExists, controllerWithTryCatch(postsController.create));

router.route('/posts/:id')
  .get(controllerWithTryCatch(postsController.getById))
  .patch(categoryExists, controllerWithTryCatch(postsController.updatePost))
  .delete(controllerWithTryCatch(postsController.deletePost));

module.exports = router;

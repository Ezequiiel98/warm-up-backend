const { Router } = require('express');

const { controllerWithTryCatch } = require('../helpers');

const PostsController = require('../controllers/posts.controller');

const router = Router();

const { PostsService } = require('../services');

const postsService = new PostsService();
const postsController = new PostsController(postsService);

router.route('/posts')
  .get(controllerWithTryCatch(postsController.getAll))
  .post(controllerWithTryCatch(postsController.create));

router.route('/posts/:id')
  .get(controllerWithTryCatch(postsController.getById))
  .patch(controllerWithTryCatch(postsController.updatePost))
  .delete(controllerWithTryCatch(postsController.deletePost));

module.exports = router;

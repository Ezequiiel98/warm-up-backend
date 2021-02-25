const { PostModel, CategoryModel } = require('../models');

class PostsService {
  constructor() {
    this.PostModel = PostModel;
  }

  async getAll() {
    const attributes = ['id', 'title', 'image', 'categoryId', 'createAt'];
    const order = [['createAt', 'DESC']];
    const include = [CategoryModel];

    const posts = await this.PostModel.findAll({ attributes, order, include });
    return posts;
  }

  async getById(id) {
    const post = await this.PostModel.findOne({ where: { id } });
    return post;
  }

  async create(data) {
    const newPost = await this.PostModel.create(data);
    return newPost;
  }

  async update({ data, id }) {
    const post = await this.PostModel.update(data, { where: { id } });
    return post;
  }

  async delete(id) {
    await this.PostModel.destroy({ where: { id } });
  }
}

module.exports = PostsService;

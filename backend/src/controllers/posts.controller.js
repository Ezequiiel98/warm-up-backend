class PostsController {
  constructor(postsService) {
    this.bindFunctions();
    this.postsService = postsService;
  }

  bindFunctions() {
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  async getAll(req, res) {
    const data = await this.postsService.getAll();
    return res.status(200).json({ data });
  }

  async getById(req, res) {
    const { id } = req.params;
    const post = await this.postsService.getById(id);

    if (post) {
      return res.status(200).json({ post });
    }

    return res.status(404).json({ message: 'post not found' });
  }

  async create(req, res) {
    delete req.body.id;

    const post = await this.postsService.create(req.body);

    return res.status(201).json({ post });
  }

  async updatePost(req, res) {
    delete req.body.id;

    const { id } = req.params;
    const postExists = await this.postsService.getById(id);

    if (postExists) {
      await this.postsService.update({ data: req.body, id });

      return res.status(200).json({ message: 'post updated successfully' });
    }

    return res.status(404).json({ message: 'post not found' });
  }

  async deletePost(req, res) {
    const { id } = req.params;
    const postExists = await this.postsService.getById(id);

    if (postExists) {
      await this.postsService.delete(id);

      return res.status(200).json({ message: 'post deleted successfully' });
    }

    return res.status(404).json({ message: 'post not found' });
  }
}

module.exports = PostsController;

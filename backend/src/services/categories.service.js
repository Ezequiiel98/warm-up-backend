const { CategoryModel } = require('../models');

class CategoryService {
  constructor() {
    this.CategoryModel = CategoryModel;
  }

  async getById(id) {
    const category = await this.CategoryModel.findOne({ where: { id } });
    return category;
  }

  async create(data) {
    const newCategory = await this.CategoryModel.create(data);
    return newCategory;
  }
}

module.exports = CategoryService;

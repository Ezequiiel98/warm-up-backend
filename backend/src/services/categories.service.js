const { CategoryModel } = require('../models');

class CategoriesService {
  constructor() {
    this.CategoryModel = CategoryModel;
  }

  async getAll() {
    const categories = await this.CategoryModel.findAll();
    return categories;
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

module.exports = CategoriesService;

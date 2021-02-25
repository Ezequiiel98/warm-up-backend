const { CategoriesService } = require('../services');

const categoriesService = new CategoriesService();

const categoryExists = async (req, res, next) => {
  const { categoryId } = req.body;

  if (!categoryId) {
    return res.status(400).json({ message: 'categoryId is required', path: 'categoryId' });
  }

  const category = await categoriesService.getById(categoryId);

  if (!category) {
    return res.status(400).json({ message: 'categoryId is invalid', path: 'categoryId' });
  }

  return next();
};

module.exports = categoryExists;

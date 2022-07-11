const { Book } = require('../../models')

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const findById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

module.exports = {
  getAll,
  findById,
}
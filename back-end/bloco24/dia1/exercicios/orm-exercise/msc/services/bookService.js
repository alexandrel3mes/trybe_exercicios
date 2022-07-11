const { Book } = require('../../models')

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const findById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({title, author, pageQuantity});
  return newBook;
}

const edit = async (id, title, author, pageQuantity) => {
  const [updateBook] = await Book.update(
    {title, author, pageQuantity},
    {where: {id}},
    );
  return updateBook;
}

module.exports = {
  getAll,
  findById,
  create,
  edit,
}
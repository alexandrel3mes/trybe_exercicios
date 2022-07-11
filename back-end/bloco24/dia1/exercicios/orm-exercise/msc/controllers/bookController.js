const bookService = require('../services/bookService');

const getAll = async (_req, res) => {
  const allBooks = await bookService.getAll();

  return res.status(200).json(allBooks);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const bookById = await bookService.findById(id);

  if(!bookById) {
    return res.status(404).json({ message: "Book not found" })
  }
  return res.status(200).json(bookById);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const newUser = await bookService.create(title, author, pageQuantity);
  return res.status(201).json(newUser);
}

module.exports = {
  getAll,
  findById,
  create,
}
const bookService = require('../services/bookService');

const getAll = async (_req, res) => {
  const allBooks = await bookService.getAll();

  return res.status(200).json(allBooks);
}

module.exports = {
  getAll,
}
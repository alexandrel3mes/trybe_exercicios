const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

const write = (arr) => {
  fs.writeFile('./post.json', JSON.stringify(arr))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
};

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    res.status(400).json({ message: 'invalid data'})
  } next();
}

const initValidation = (req, res, next) => {
  const { initials } = req.body;
  if (initials.length > 3 && initials.match(/[a-z]/)) {
    res.status(400).json({ message: 'invalid data'})
  } next();
}


router.post('', nameValidation, initValidation, (req, res) => {
  const { name, initials } = req.body;
  const obj = { name, initials };
  write(obj);
  res.status(200).json({  name, initials })
})

module.exports = router;
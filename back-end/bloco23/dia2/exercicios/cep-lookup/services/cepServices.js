const cepModel = require('../models/cepModel');

const findByCep = async (cep) => {
  const cepObj = await cepModel.findByCep(cep);
  return cepObj;
}

module.exports = {
  findByCep,
}
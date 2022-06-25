const validationCep = require('../middleware/validationCep');
const services = require('../services/cepServices');

const findByCep = async (req, res, next) => {
  try {
    const { cep } = req.params;
  
    validationCep(req, res, next);
    const locationData = await services.findByCep(cep);

    if(locationData === null) {
      return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });  
    }
    return res.status(200).json(locationData);
  } catch(error) {
    console.error(error.message);
  }
}

module.exports = {
  findByCep,
}
const validationCep = (req, res) => {
  const { cep } = req.params;
  const cepRegex =   /^[0-9]{5}-?[0-9]{3}$/;

  if(!cepRegex.test(cep)) {
    return res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } });
  }
}

module.exports = validationCep;
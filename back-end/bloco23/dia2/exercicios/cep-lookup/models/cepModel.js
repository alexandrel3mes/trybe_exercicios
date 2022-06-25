const connection = require('./connection');

const findByCep = async (cep) => {
  try {
    const query = `
    SELECT cep, logradouro, bairro, localidade, uf
    FROM cep_lookup.ceps
    WHERE cep = ?
  `;
  
  const [cepData] = await connection.execute(query, [cep]);
  if (cepData.length === 0) return null;
  
  return cepData[0];
  } catch(error) {
    console.error('erro no model')
  }
}

module.exports = {
  findByCep,
};
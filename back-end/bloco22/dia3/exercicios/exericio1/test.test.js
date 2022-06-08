const { expect } = require('chai');

const checkNumber = require('./checkNumber')

describe('Checa se o número', () => {
  it('É realmente um número', () => {
    const resposta = checkNumber('aa');
    expect(resposta).to.equal('o valor deve ser um número');
  })

  it('É positivo', () => {
    const resposta = checkNumber(2);
    expect(resposta).to.be.equal('positivo')
  });

  it('É negativo', () => {
    const resposta = checkNumber(-2);
    expect(resposta).to.be.equal('negativo')
  });

  it('É neutro', () => {
    const resposta = checkNumber(0);
    expect(resposta).to.be.equal('neutro')
  });
}); 
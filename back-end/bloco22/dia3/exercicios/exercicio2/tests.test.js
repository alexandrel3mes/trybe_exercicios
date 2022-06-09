const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const readAndWrite = require('./readAndWrite');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('readAndWrite', () => {
  describe('Quando o arquivo existe mas vazio', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = readAndWrite('arquivo.txt', CONTEUDO_DO_ARQUIVO);

        expect(resposta).to.be.equals('ok ');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  })
});
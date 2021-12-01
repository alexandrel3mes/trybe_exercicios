/* Usando o objeto abaixo, faça os exercícios a seguir:
 */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

/*   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
 */

console.log("Bem vinda, " + info.personagem);

/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: */

info.recorrente = "Sim";
console.log(info.recorrente);


/* 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: */

for (let key in info) {
    console.log(key)
}

/* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: */

for (let key in info) {
    console.log(info[key]);
}

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console: */

let info2 = {
    personagem:'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota:'O último MacPatinhas',
    recorrente: 'Sim',
}    

if (info.recorrente == 'Sim' && info2.recorrente == 'Sim') {
        info.recorrente = 'Ambos recorrentes'
        info2.recorrente = 'Ambos recorrentes' }


for (let key in info, info2) {

    console.log(info[key] + " e " + info2[key])

    }


    /* Usando o objeto abaixo, faça os exercícios a seguir:
    6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
          {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editor: 'Rocco',
          },
        ],
      };

      let pior = leitor.livrosFavoritos[0];
      console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + pior.titulo)


      console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")
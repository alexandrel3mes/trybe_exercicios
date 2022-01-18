/* Bônus
Parte I - Game Actions Simulator
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo. */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */0

const dragonDmg = () => {
  let dano = (Math.floor(Math.random() * 15) + 1) + dragon.strength;

  return dragon.damage = dano;
}


/* 2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
 */

const warriorDmg = () => {
  let dano = (Math.floor(Math.random() * warrior.strength) + 1) + (warrior.strength * warrior.weaponDmg);

  return warrior.damage = dano;
}


/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
 */

const mageTurn = () => {
  let dano = (Math.floor(Math.random() * mage.intelligence) + 1) + (mage.intelligence * 2);
  let mana = mage.mana - 15;

  if (mage.mana < 15) {
    mage.damage = "Não possui mana suficiente"
    mage.mana = mage.mana;
  }

  return mage.damage = dano, mage.mana = mana;
}

const turn = (func1, func2, func3) => {
  battleMembers.dragon.damage = func1;
  battleMembers.warrior.damage = func2;
  battleMembers.mage = func3;

  return battleMembers;
};

console.table(turn(dragonDmg, warriorDmg, mageTurn));
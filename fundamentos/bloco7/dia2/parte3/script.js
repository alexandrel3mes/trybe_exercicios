const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1) Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const nightShift = (object, key, value) => {
  object[key] = value;
}

nightShift (lesson2, 'turno', 'noite');

console.log(lesson2)

/* 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const keys = (object1) => {
  return Object.keys(object1);
}

console.log(keys(lesson2));

/* 3) Crie uma função para mostrar o tamanho de um objeto. */

const length = (object) => {
  return Object.keys(object).length;
}

console.log(length(lesson2));

/* 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

const value = (object) => {
  return Object.values(object);
}

console.log(value(lesson2));

/* 5) Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons)


/* 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const allStudents = () => {
  const students1 = allLessons.lesson1.numeroEstudantes;
  const students2 = allLessons.lesson2.numeroEstudantes;
  const students3 = allLessons.lesson3.numeroEstudantes;

  return students1 + students2 + students3;
}

console.log(allStudents());

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica' */

const getValueByNumber = (objectInside, key) => {
  let keys =  allLessons[objectInside];
  const total = Object.values(keys);
  return total[key]
}

console.log(getValueByNumber('lesson1', 2));

/* 8) Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. */

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
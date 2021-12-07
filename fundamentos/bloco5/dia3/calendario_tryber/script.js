function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

      let lista = document.querySelector('#days');

      for (index of dezDaysList) {
          let itemDaLista = index;

          let listaItem = document.createElement('li');
          listaItem.setAttribute('class', 'day');

          if (index == 24 || index == 31){
            listaItem.setAttribute('class', 'day holiday');
          }

          if (index == 4 || index == 11 || index == 18){
            listaItem.setAttribute('class', 'day friday');
          }

          if (index == 25) {
            listaItem.setAttribute('class', 'day friday holiday');
          }


          listaItem.innerText = itemDaLista;

          lista.appendChild(listaItem);
      }

      //Exercicio 2

      function criaBotao (string) {
          let btn = document.createElement("button");
          btn.setAttribute('type', 'button');
          btn.setAttribute('id', 'btn-holiday');
          btn.innerText = string;
          document.querySelector(".buttons-container").appendChild(btn);
      }

      criaBotao ("Feriados");

      
      //Exercicio 3

      let botao = document.getElementById("btn-holiday");

      botao.addEventListener('click', clicaUm);

      function clicaUm () {

        if ( document.getElementsByClassName('holiday')[0].style.backgroundColor != 'blue') {
          document.getElementsByClassName('holiday')[0].style.backgroundColor = 'blue';
          document.getElementsByClassName('holiday')[1].style.backgroundColor = 'blue';
          document.getElementsByClassName('holiday')[2].style.backgroundColor = 'blue';
        } else {
          document.getElementsByClassName('holiday')[0].style.backgroundColor = "rgb(238,238,238)";
          document.getElementsByClassName('holiday')[1].style.backgroundColor = "rgb(238,238,238)";
          document.getElementsByClassName('holiday')[2].style.backgroundColor = "rgb(238,238,238)";
        }
      }
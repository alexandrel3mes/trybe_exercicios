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


      //Exercicio 4

      function criaBotaoSexta (string) {
        let btn = document.createElement("button");
        btn.setAttribute('type', 'button');
        btn.setAttribute('id', 'btn-friday');
        btn.innerText = string;
        document.querySelector(".buttons-container").appendChild(btn);
    }

    criaBotaoSexta ("Sexta-feira");

      //Exercicio 5

      let botaoSexta = document.getElementById('btn-friday')
      botaoSexta.addEventListener('click', clicaSexta);

      let sextaContent = document.getElementsByClassName('friday')[0].innerText;

      function clicaSexta () {
          if (document.getElementsByClassName('friday')[0].innerText == '4'){
            document.getElementsByClassName('friday')[0].innerText = 'É sextaaa';
            document.getElementsByClassName('friday')[1].innerText = 'É sextaaa';
            document.getElementsByClassName('friday')[2].innerText = 'É sextaaa';
            document.getElementsByClassName('friday')[3].innerText = 'É sextaaa';
          } else {
            document.getElementsByClassName('friday')[0].innerText = '4';
            document.getElementsByClassName('friday')[1].innerText = '11';
            document.getElementsByClassName('friday')[2].innerText = '18';
            document.getElementsByClassName('friday')[3].innerText = '25';
          }
      }

      //Exercicio 6

      for (let indexDay = 0; indexDay <= 33; indexDay += 1) {
        document.getElementsByClassName('day')[indexDay].addEventListener('mouseenter', diaZoomIn);
        document.getElementsByClassName('day')[indexDay].addEventListener('mouseleave', diaZoomOut);
      }


      function diaZoomIn (event) {
        event.target.style.fontSize = 'xxx-large';
      }

      function diaZoomOut (event) {
        event.target.style.fontSize = 'large';
      }



      //Exercicio 7
      


    
      function addTarefa (tarefa) {
          let newTarefa = document.createElement('span');
          newTarefa.innerText = tarefa;
          document.querySelectorAll('.my-tasks')[0].appendChild(newTarefa)
      }

      addTarefa ('Cozinhar');
      

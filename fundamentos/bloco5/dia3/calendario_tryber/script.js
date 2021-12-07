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

            function dayMouseOver() {
                let days = document.querySelector('#days');
              
                days.addEventListener('mouseover', function(event) {
                  event.target.style.fontSize = '30px';
                  event.target.style.fontWeight = '600';
                })
              };
              
              function dayMouseOut() {
                let days = document.querySelector('#days');
              
                days.addEventListener('mouseout', function(event) {
                  event.target.style.fontWeight = '200';
                  event.target.style.fontSize = '20px';
                })
              };
              
              dayMouseOver();
              dayMouseOut();
              
        
              



      //Exercicio 7
     function adicionaTarefa (tarefa) {
        let tasksPai = document.querySelector(".my-tasks");
        let newTask = document.createElement("span");
/*         let space = document.createElement("br"); */
        newTask.innerText = tarefa;
        tasksPai.appendChild(newTask);
/*         newTask.appendChild(space); */
            }
      
            adicionaTarefa('Cozinhar');
/*             adicionaTarefa('Lavar louça');
            adicionaTarefa('Varrer a sala');
            adicionaTarefa('Estudar DOM');
       */

      //Exercicio 8

      function adicionaCor (cor) {
          let novaCor = document.createElement('div');
          novaCor.setAttribute('class', 'task');
          novaCor.style.backgroundColor = cor;
          document.querySelector(".my-tasks").appendChild(novaCor);
      }

      adicionaCor ('blue');

      //Exercicio 9

 
     let selectedTask = document.querySelector('.task');

     selectedTask.addEventListener('click', selecionaTarefa);
     
     function selecionaTarefa () {
        if (selectedTask.className == 'task'){
        selectedTask.setAttribute('class', 'task selected')
        } else {
            selectedTask.setAttribute('class', 'task')
        }
     }

      //Exercicio 10
      function setDayColor() {
        let selectedTask = document.getElementsByClassName('task selected');
        let days = document.querySelector('#days');
        let taskDiv = document.querySelector('.task');
        let taskColor = taskDiv.style.backgroundColor;
        
        days.addEventListener('click', function(event){
          let eventTargetColor = event.target.style.color;
          if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
          } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
          }
        });
      };
      
      setDayColor();


      //bonus


      function addNewTask() {
        let getInputField = document.querySelector('#task-input');
        let addInputButton = document.querySelector('#btn-add');
        let getTaskList = document.querySelector('.task-list');
      
        addInputButton.addEventListener('click', function() {
          if (getInputField.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = getInputField.value;
      
            getTaskList.appendChild(newLi);
            getInputField.value = '';
          } else {
            alert('Error: Digite ao menos 1 caractere.');
          }
        })
      
        getInputField.addEventListener('keyup', function(event) {
          if (event.key === 'Enter' && getInputField.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = getInputField.value;
      
            getTaskList.appendChild(newLi);
            getInputField.value = '';
          }
        });
      };
      
      addNewTask();
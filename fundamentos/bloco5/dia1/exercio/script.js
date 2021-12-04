        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3 Crie uma função que mude a cor do quadrado vermelho para branco.
 4 Crie uma função que corrija o texto da tag <h1>.
 5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


 function textoP () {
     return document.getElementsByTagName("p")[0].innerText = "Daqui a 2 anos me vejo com uma grana legal e pronto para investir no meu sonho de viver de música."
 }

 textoP ();

 function mudaAmarelo () {
     return document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76, 164, 109)";
 }

 mudaAmarelo ();

 function mudaVermelho () {
     return document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
 }

 mudaVermelho ();

 function corrigeH1 () {
     return document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
 }

 corrigeH1 ();

 function pMaiusculo () {
    document.getElementsByTagName("p")[0].style.textTransform = "uppercase";
    document.getElementsByTagName("p")[1].style.textTransform = "uppercase";
    document.getElementsByTagName("p")[2].style.textTransform = "uppercase";
 }

 pMaiusculo ();

 function exibeP () {
    console.log(document.getElementsByTagName("p")[0].innerText)
    console.log(document.getElementsByTagName("p")[1].innerText)
    console.log(document.getElementsByTagName("p")[2].innerText)
 }

 exibeP ();
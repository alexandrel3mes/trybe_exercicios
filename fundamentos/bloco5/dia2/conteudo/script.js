/* 
Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. */

document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "red";


/* Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */

document.getElementById("elementoOndeVoceEsta").firstElementChild.innerText = "Texto do primeiro elemento filho";


/* Acesse o primeiroFilho a partir de pai . */

document.getElementById("pai").firstElementChild;

/* Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta . */

document.getElementById("elementoOndeVoceEsta").previousElementSibling;

/* Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta . */

document.getElementById("elementoOndeVoceEsta").nextSibling;

/* Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta . */

document.getElementById("elementoOndeVoceEsta").nextElementSibling;

/* Agora acesse o terceiroFilho a partir de pai . */

document.getElementById("pai").lastElementChild.previousElementSibling;



// Parte 2

/* Crie um irmão para elementoOndeVoceEsta . */

let irmaoDoElemento = document.createElement("section");

document.getElementById("pai").appendChild(irmaoDoElemento);

irmaoDoElemento.setAttribute('id', 'irmaoDoElemento')


/* Crie um filho para elementoOndeVoceEsta  */

let filhoDoOnde = document.createElement("section");

document.getElementById("elementoOndeVoceEsta").appendChild(filhoDoOnde);

filhoDoOnde.setAttribute('id', 'filhoDoOnde');

/* Crie um filho para primeiroFilhoDoFilho . */

let netoDeOnde = document.createElement("section");

document.getElementById("primeiroFilhoDoFilho").appendChild(netoDeOnde);

netoDeOnde.setAttribute('id', 'netoDoOnde');

/* A partir desse filho criado, acesse terceiroFilho . */

document.getElementById("netoDoOnde").parentElement.parentElement.nextElementSibling;



// Parte 3

/* Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho . */



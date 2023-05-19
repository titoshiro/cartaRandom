

function numeroAleatorio(){
let num =['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let numAleatorio = num[Math.floor(Math.random()*num.length)];
return numAleatorio
}

function pintaAleatorio(){
  let pinta=['♥', '♦', '♣', '♠'];
  let pintaAleatorio= pinta[Math.floor(Math.random()*pinta.length)];
  return pintaAleatorio
  }
  


function generadorDeCartas() {
  let numero = numeroAleatorio();
  let pinta= pintaAleatorio();
  document.getElementById('numerotexto').textContent = numero;
  document.getElementById("pinta1").textContent=pinta
  document.getElementById("pinta2").textContent=pinta
}


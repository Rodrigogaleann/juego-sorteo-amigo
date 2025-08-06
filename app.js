// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
 let inputAmigo = document.getElementById("amigo")
  let nombre = inputAmigo.value;

 if(nombre==""){
alert("Por favor, inserte un nombre.")
 }else{
     
    amigos.push(nombre);
    inputAmigo.value = '';
    console.log("Amigo agregado: " + nombre);
 }
  
 mostrarAmigos()
}   

function mostrarAmigos() {
  // 1. Obtener el elemento <ul>
  let listaAmigos = document.getElementById("listaAmigos");

  // 2. Limpiar el contenido existente de la lista para evitar duplicados
  listaAmigos.innerHTML = '';

  // 3. Recorrer el array 'amigos' y agregar cada nombre
  for (const amigo of amigos) {
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  }
}

function sortearAmigo() {
  
  let resultadoElemento = document.getElementById("resultado");

  
  if (amigos.length === 0) {
    resultadoElemento.innerHTML = '<li>No hay amigos para sortear. Por favor, agrega al menos uno.</li>';
    return; 
  }


  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceAleatorio];


  resultadoElemento.innerHTML = `<li>¡El amigo sorteado es: ${amigoSorteado}!</li>`;


  console.log("El amigo sorteado es:", amigoSorteado);
}

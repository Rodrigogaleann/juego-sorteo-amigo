# 🎲 JUEGO DE AMIGOS

Creamos un pequeño juego de interacción donde el usuario carga todos los nombres de sus amigos y el sistema elige uno al azar.

Tenemos una estructura básica de HTML con botones e inputs donde se ingresan los nombres. Luego tenemos las funciones en JAVASCRIPT descriptas más abajo.

### Funcionalidad JavaScript

```javascript
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
```
En este fragmento de codigo declaramos el array que contiene los nombre de tus amigos. 

Luego creamos la funcion que detetctara si se agrego texto subirlo alm array en el caso que no se escriba nada que arroja un mensaje que agregue un nombre valido.

```
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
```
Luego tenemos esta funcion que muestra en forma de listado los nombre agregados en el array

y por ultimo tenemos esta funcion que hace el sorteo, tomando el indice del array y asi eligiendo el nombre en esa posicion

```
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
```

/*
El objeto window y console
window es el objeto global de JavaScript y console deriva directamente de este, por tanto está disponible en cualquier archivo .js.

 */
window.console.log("Hola"); // Hola
console.log("Hola"); //Hola

let name = "Cristian";
let last_name = "Villca";

console.log(`Hola, soy ${name} ${last_name}`); 

console.warn("Base de datos no respaldada, cuidado!");

console.info("Usuario creado satisfactoriamente.");

console.error("No se pudo eliminar el registro");


console.group("Listado de paises");
  console.log("--Listado de paises--");
  console.log("Bolivia");
  console.log("Peru");
  console.log("Brasil");
  console.log("Francia");
  console.log("Alemania");
console.groupEnd();
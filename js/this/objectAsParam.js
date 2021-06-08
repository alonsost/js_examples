//En este caso, existe una función que recibe un objeto como parámetro, y le agrega el método hablar, luego, se ejecuta la función sobre dos objetos.
let tellName = function(obj){
    obj.talk = function(){
        console.log(this.name)
    }
}

const Mateo = {
    name: 'Mateo',
    age: 22
}

const Juan = {
    name: 'Juan',
    age: 25
}

tellName(Juan)
tellName(Mateo)

Juan.talk() //Juan
Mateo.talk() //Mateo

//This en este caso hace referencia al objeto que se añade este método.
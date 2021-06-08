/*En el caso de asignación implícita, this hace referencia al objeto, que contenía el método donde se invoca this, pero si tenemos una función y deseamos explícitamente asignarle a que va a hacer referencia this, desde ES5 contamos con los métodos call(), apply() y bind().

Vamos a tener una función, que reciba unos parámetros y muestre en consola, con la propiedad nombre a la que haga referencia this, y los parámetros que recibe.*/
const talk = function(l1, l2, l3){
    console.log(`Hola mi nombre es ${this.name} y se programar en ${l1}, ${l2}, ${l3}`)
}

const yeison = {
    name:'Yeison',
    age: 22
}

const lenguages = ['Javascript', 'Python', 'C']

//El método call nos permite definir a que va a hacer referencia this, en su primer parámetro, los parámetros siguientes son los parámetros que recibe la función.
talk.call(yeison, lenguages[0], lenguages[1], lenguages[2])

/**El método apply, funciona igual que call, permitiendo referencia this en el primer parámetro, pero este nos permite pasar un array, como los parámetros de la funcion. */
hablar.apply(yeison, lenguages);

/*
bind()
Este método funciona diferente a los anteriores, este nos devuelve una función, en dónde this, hace referencia al objeto que pasamos en su parámetro. */

const hablaYeison = hablar.bind(yeison, lenguages[0],lenguages[1],lenguages[2]);

hablaYeison();
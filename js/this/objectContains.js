let Persona = function(name, age, mother){
    return{
        name: name,
        age: age,
        talk: function(){
            console.log(this.name)
        },
        mother: {
            name: mother,
            talk: function(){
                console.log(this.name)
            }
        }
    }
}

const ana = Persona('Ana', 30, 'Clara')
ana.talk()//Ana
ana.mother.talk() //Clara
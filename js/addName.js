function addName(evt){
    evt.preventDefault()

    let name = document.getElementById("name").value

    if(name===""){
        alert("El nombre no puede estar vacio")
    }else{
        let option = `<li> ${name} </li>`
        let list = document.getElementById("name-list")
        list.innerHTML += option
        alert("Se ha insertado el nombre")
        document.getElementById("name").value = ""
    }
}
function showOption(){
    var options = document.getElementsByName("eleccion")
    console.log(options)
    for(let i = 0; i < options.length; i++){
        if(options[i].checked){
            alert(options[i].value)
        }
    }
}
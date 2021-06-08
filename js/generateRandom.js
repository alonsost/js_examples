function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}

function generateNumbers(){
    let elements = document.getElementById("elements")
    let generateOptions = ""
    for(let i = 0; i< 10; i++){
        generateOptions += `<option> ${getRandomInt(1,100)} </option>`
    }
    elements.innerHTML = generateOptions
}
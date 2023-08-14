const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})
//essa função vai escutar algum evento

function dizOi(nome) {
    console.log("Olá " + nome)
    console.log("Bem-Vindo ao Robotron 2000")
} 

dizOi("Pedro")
const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elmento) => {
    elmento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
        //.textContent -> vai mostrar todo o conteudo do texto.
    })
})


function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1

    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
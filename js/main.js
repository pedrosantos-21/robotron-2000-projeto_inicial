const controle = document.querySelectorAll("[data-controle]")

controle.forEach((elmento) => {
    elmento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
         //parentNodepara achar o elemnto "pai"
        
        //.textContent -> vai mostrar todo o conteudo do texto.
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1

    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
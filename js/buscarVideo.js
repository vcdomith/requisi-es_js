import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";

async function buscarVideo(evento) {

    evento.preventDefault()

    const dadosPesquisa = document.querySelector('[data-pesquisa]').value

    const busca = await conectaApi.buscaVideo(dadosPesquisa)

    const lista = document.querySelector('[data-lista]')

    while (lista.firstChild) {

        lista.removeChild(lista.firstChild)

    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento)))

    if (busca.length === 0) {
        lista.innerHTML = `<h2 claass="mensagem__titulo">Não existem videos com esse termo!</h2>`
    }

}

const barraPesquisa = document.querySelector('[data-pesquisa]')

barraPesquisa.addEventListener('search', (evento) => {
    
    buscarVideo(evento)
    
})

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]')

botaoPesquisa.addEventListener('click', evento => buscarVideo(evento))

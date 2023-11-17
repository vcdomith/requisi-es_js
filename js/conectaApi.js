
// Requisição GET | fetch() por padrão já é configurado para GET, então só necessário colocar a url dentro da função
async function listaVideos() {

    const conexao = await fetch('http://localhost:3000/videos')

    const conexaoJSON = conexao.json()

    return conexaoJSON

}

// Requisição POST | fetch() precisa de informações extras para que seja possível enviar dados novos para a API. method é POST, com headers e body dependendo da implementação da API sendo usada
async function criaVideo(titulo, descricao, url, imagem) {

    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
   
    if (!conexao.ok) {
        throw new Error('Não foi possível enviar o vídeo')
    }

    const conexaoJSON = await conexao.json()

    return conexaoJSON

}

async function buscaVideo(termoBusca) {

    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)
    const conexaoJSON = conexao.json()

    return conexaoJSON

}

export const conectaApi = {

    listaVideos, 
    criaVideo, 
    buscaVideo

}
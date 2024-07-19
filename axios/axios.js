/*
    Axios é uma ferramenta que nos permite fazer requisições HTTP (Hypertext Transfer Protocol).

    Usa "promessas" (promises), que ajudam a lidar com operações assíncronas.

    Utiliza verbos HTTP
    - get
    - post
    - delete
    - put

    Retorna:
    - status Code: 1xx, 2xx, 3xx, 4xx, 5xx
    - data: Contem o conteúdo da api de fato. => [], {}, "", 0
    - ...outros dados (documentação)

*/

// -------------- LISTAGEM DE USUÁRIOS --------------------

// THEN / CATCH / FINALLY

function buscarUsuarios() {
    api.get('/users')
        .then(function (resposta) {
            console.log(resposta);
            // requisição foi bem-sucedida, retorna data, status, statusText, headers e config.
        })
        .catch(function (erro) {
            console.error(erro);
            // requisão mal sucedida
        })
        .finally(function () {
            console.log('Finalizou a requisição...')
            // sempre vai ser executado quando a função finalizar, independente se for sucesso ou não
        })
}

// TRY / CATCH / FINALLY (forma mais moderna, atual)

/* 
    ---- PROMISE ----
    ASYNC: Requisição assíncrona, temos que esperar
    AWAIT: Aguarando até a api responder

*/

async function listaUsuarios() { // função assíncrona, faz uma promessa
    try {
        const resposta = await api.get('/users') // o await faz o código esperar a api carregar para continuar
        console.log(resposta)
        // requisição bem-sucedida
    } catch (erro) {
        console.log(erro)
        // requisão mal sucedida
    } finally {
        console.log('Finalizou a requisição...')
        // executa independente do resultado
    }
}

// -------------- CHAMADA DAS FUNCÕES --------------------
// window.onload = buscarUsuarios() // quando a página estiver 100% carregada, vai acionar a função de buscar usuários
// window.onload = listaUsuarios()
// MÉTODOS ---------------------------------------------------------------------------------------

/*
getElementsByClassName

- o método está no plural, significa que vai nos retornar mais que um elemento (ou seja, uma lista)
- retorna uma lista de objetos com todos os elementos que possuem o nome da classe dada
*/

// seleciona todos os elementos com a classe "minha-classe"
var elementos = document.getElementsByClassName("minha-classe");
console.log(elementos) // vão ser encontrados dois elementos

// a função será chamada quando o usuário passar o mouse sobre o elemento
function aoPassarOMouse(event) {
    // se ativada, a função vai alterar a cor do texto do elemento que disparou o evento (os parágrafos)
    event.target.style.color = "red";
}

// a função será chamada quando o mouse sair do elemento
function aoSairDoMouse(event) {
    // se ativada, a função mudará a cor do texto do elemento de volta para azul
    event.target.style.color = "blue";
}

// a estrutura de repetição percorre todos os elementos selcionados e adiciona os eventos a eles
for (var i = 0; i < elementos.length; i++) /* (iniciação; condição; incremento) */ {
    // a variável i inicia como 0, se a variável i for menor que o número de elementos, é incrementado +1pa
    elementos[i].addEventListener('mouseover', aoPassarOMouse);
    elementos[i].addEventListener('mouseout', aoSairDoMouse);
}

/*
getElementsByTagName

- também está no plural e retornará uma lista
- traz uma lista de elementos com a tag pesquisada
*/

// seleciona todos os elementos <span> no documento
var textosSpan = document.getElementsByTagName("span");

// percorre todos os elementos <span> selecionados
for (var i = 0; i < textosSpan.length; i++) {
    // altera o texto de cada elemento
    textosSpan[i].innerText = "Texto de teste alterado!";
    // note que nesse caso foi usado o sinal de = no innerText, porque nesse caso foi usado para substituir o texto
}

/*
querySelectorAll

- retorna uma lista de elementos que tenham os seletores desejados
*/

// seleciona todas as <div> com a classe 'note' ou 'alert'
var matches = document.querySelectorAll("div.note, div.alert");

// percorre os elementos selecionados e altera o texto
matches.forEach(function(element) {
    element.innerText += " (Texto de teste incrementado ao texto existente)";
    // note que nesse caso foi usado o sinal += no innerText, porque nesse caso foi usado para adicionar o texto
});

/*
query Selector => consulta por seletores

CONSULTA POR TAG HTML:
const texto = document.querySelector('p')
- utiliza apenas aspas

CONSULTA POR CLASS NAME:
const texto = document.querySelector('.meu-paragrafo')
- utiliza aspas e ponto, assim como para acessar a classe no CSS

CONSULTA POR ID:
const texto = document.querySelector('#texto-dinamico')
- utiliza #, assim como para acessar o ID no CSS

CONSULTA POR VARIOS SELETORES CONCATENADOS
const texto = document.querySelector('p.verde')
const button = document.querySelector('button#my-btn')
- utiliza a classe e o caracter do atributo para puxá-lo
*/

/*
getAttribute

- retorna o valor de um atributo específico
- se o atributo não existir, o valor retornado será null ou "" (string vazia)
- sempre precisa primeiro acessar o elemento que está o atributo (através do id, da class ou pelo querySelector) para
depois selecionar o atributo desejado
*/

// seleciona o link pelo ID
var link = document.getElementById("meuLink");

// obtém o valor do atributo 'href'
var url = link.getAttribute("href");

// exibe a URL no elemento <p>
document.getElementById("resultado").innerText = "O URL do link é: " + url;

/*
setAttribute

- adiciona ou modifica um atributo
*/

// seleciona o botão
var b = document.querySelector("button");

// desabilita o botão (name, value)
b.setAttribute("disabled", "disabled");

/*
innerHTML

- usado para obter ou substituir o conteúdo de elementos HTML
*/

// seleciona o botão
var botao = document.getElementById("meuBotao");

// adiciona um evento de clique ao botão
botao.onclick = function() {
    // altera o conteúdo da <div>
    document.getElementById("minhaDiv").innerHTML = "Texto alterado com <strong>innerHTML</strong>!";
};

/*
DIFERENÇA ENTRE innerHTML e textHTML

- se usa innerText quando precisa adicionar ou editar apenas do texto
- se usa innerHTML quando precisa manipular ou adicionar HTML dentro de um elemento (como adicionar novas tags, tipo
negrito e itálico)
*/

/*
MODIFICANDO UM ATRIBUTO DA TAG

- podemos modifificar o valor de um atributo usando a seguinte estrutura:

estrutura: document.getElementById(id).attribute = "newValue"
substituímos o "id", o "attribute" e o "newValue"
*/

// seleciona o botão
var botao = document.getElementById("mudarClasse");

// adiciona um evento de clique ao botão
botao.onclick = function() {
    // muda o atributo 'class' do parágrafo
    document.getElementById("meuParagrafo").setAttribute("class", "nova");
};

/*
MODIFICANDO O ESTILO DA TAG

- podemos modificar o estilo de uma tag usando a seguinte estrutura:

estrutura: document.getEleemntById(id).style.property = "newStyle"
substituímos o "id", "property" e o "newStyle"
*/

// seleciona o botão
var botao = document.getElementById("botao");

// adiciona um evento de clique ao botão
botao.onclick = function() {
    // muda a cor do segundo parágrafo para azul
    document.getElementById("paragrafo2").style.color = "blue";
};

/*
clasList

- permite adicionar (add), remover (remove) ou alterar (toggle) a classe de um elemento
*/

const list = document.getElementById("myDIV").classList;

// adiciona o estilo (opção 1)
document.getElementById("addButton").onclick = function() {
    list.add("myStyle");
};

// remove o estilo (opção 2)
document.getElementById("removeButton").onclick = function() {
    list.remove("myStyle");
};

// altera o estilo (entre a opção 1 e 2) -  muito usado para mudar o tema da página (light theme and dark theme)
document.getElementById("toggleButton").onclick = function() {
    list.toggle("myStyle");
};
 
/*
CREATE
- serve para criar elementos HTML
*/

const imagem = document.createElement('img')
imagem.src = 'imagemTeste.jpg'
imagem.alt = 'Arquitetura DOM'
imagem.style.width = 'auto'
imagem.height = 250

console.log(imagem);

/*
APPEND CHILD
- serve para adicionar um elemento no HTML
*/

const divImagem = document.getElementById("aquiVaiImagem")
divImagem.appendChild(imagem)

console.log(divImagem)

/*
REMOVE CHILD
- serve para remover um elemento no HTML
- primeiro precisamos chegar aonde está o elemento para depois excluir ele
*/

// o evento garante que todos os elementos HTML estejam completamente carregados para a manipulação
document.addEventListener('DOMContentLoaded', function() {
    // seleciona o elemento body, porque é onde o botão está
    const body = document.querySelector('body');
    
    // seleciona o botão, que é o elemento que queremos excluir
    const myBtn = document.querySelector('#my-btn');
    
    // remove o botão do DOM
    body.removeChild(myBtn);
    
    // verifica se o botão foi removido
    console.log(myBtn);
});
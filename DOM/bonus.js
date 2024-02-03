// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const lingua = window.navigator.language;
console.log(lingua);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);

// Retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

// Retorne no console todas as imagens do site
const img = document.querySelector("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelector('[href^="#]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animaisDescrição h2");
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);

const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  console.log(item);
});

// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll("p");
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imagens = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

function teclado(event) {
  if (event.key === "a") document.body.classList.toggle("azul");
  else if (event.key === "v") document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", teclado);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  //impede que o navegador siga a URL
  event.preventDefault();
  console.log(event);
  event.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  links.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("bory *");

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleElemento(event) {
  event.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  if (event.key === "t") {
    document.body.style.fontSize = "larger";
  }
}

window.addEventListener("keydown", handleClickT);

// Seleciona o elemento HTML com a classe 'animals'
const animals = document.querySelector(".animals");

// Cria um novo elemento h1
const novoH1 = document.createElement("h1");
// Define o texto interno do novo h1 como 'Novo Título'
novoH1.innerText = "Novo Título";
// Adiciona a classe 'titulo' ao novo h1
novoH1.classList.add("titulo");

// Adiciona o novo h1 como o último filho do elemento com a classe 'animals'
animals.appendChild(novoH1);

// Duplique o menu e adicione ele em copy

const menuOriginal = document.querySelector("#menu");
const menuCopia = menuOriginal.cloneNode(true);
const secaoCopy = document.querySelector(".copy");

secaoCopy.appendChild(menuCopia);

// Seleciona o primeiro <dt> dentro da <dl> com a classe 'Faq'
const faq = document.querySelector(".faq");
const primeiroDt = document.querySelector("dt");

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, sobrenome) {
  (this.nome = "Nome pessoa"),
    (this.idade = 0),
    (this.andar = function () {
      console.log(this.nome + " andou");
    });
}

const Pessoa = new Pessoa();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  const elementList = document.querySelectorAll(selector);
  this.element = elementList;
}

this.addclass = function (classe) {
  elementList.forEach((element) => {
    element.classList.add(classe);
  });
};

this.removeclass = function (classe) {
  elementList.forEach((element) => {
    element.classList.remove(classe);
  });
};

const elementosDoDom = new Dom("li");
elementosDoDom.addClass("ativar");
elementosDoDom.removeClass("ativo");

// Crie uma função construtora de Pessoas Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenomenome}`;
};

const diego = new Pessoa("Diego", "Franco", 26);
diego.nomeCompleto(); //RETORNA O NOME COMPLETO

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document

//Resposta:
// NodeList:
// forEach(callback): Itera sobre cada nó na NodeList, executando a função de retorno de chamada.
// item(index): Retorna o nó no índice especificado na NodeList.
// HTMLCollection:
// namedItem(name): Retorna o elemento com o nome ou ID especificado da coleção.
// item(index): Retorna o elemento no índice especificado na coleção.
// length: Retorna o número de elementos na coleção.
// Liste os construtores dos dados abaixo

const li = document.querySelector("li");

li; //HTMLElement
li.click; //Function
li.innerText; //String
li.value; // Number (ou String, dependendo do contexto)
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); // Undefined (o método click não retorna um valor)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String, .name retorna o nome da função construtora

const comida = "Pizza"; //retorna diretamente a string
const liquido = new String("Água"); //retorna o objeto string
const ano = new String(2018);

const fruta = "Banana";

fruta.endsWith("nana"); // true
fruta.startsWith("Ba"); // true
fruta.startsWith("na"); // false

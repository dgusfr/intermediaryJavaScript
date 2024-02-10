# Exercícios Intermediários em JavaScript

Este repositório contém uma série de exercícios resolvidos em JavaScript, abrangendo conceitos intermediários da linguagem.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/js.png" alt="Logo JS" width="100"/>
  </div>
</div>

## Status

![Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge)

<!-- ![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge) -->

## Descrição:

**Orientação a Objetos**

- **1.js**: Crie uma classe `Veiculo` com propriedades marca e modelo, e um método para imprimir as informações do veículo.
  - Em seguida, crie uma classe `Carro` que herda de `Veiculo` e adiciona uma propriedade para o número de portas.
- **2.js**: Implemente uma classe `Animal` com propriedades nome e tipo, e um método para emitir um som.
  - Em seguida, crie classes `Cachorro` e `Gato` que herdam de `Animal` e sobrescrevem o método para emitir o som específico de cada animal.
- **3.js**: Desenvolva uma classe `Shape` com propriedades cor e preenchimento, e métodos para desenhar e calcular a área.
  - Em seguida, crie classes `Retangulo` e `Circulo` que herdam de `Shape` e implementam métodos específicos para calcular a área dessas formas.
- **4.js**: Crie uma classe `Pessoa` com propriedades nome e idade, e um método para imprimir as informações da pessoa.
  - Em seguida, desenvolva uma classe `Funcionario` que herda de `Pessoa` e adiciona propriedades como cargo e salário.
- **5.js**: Implemente uma classe `Conta` com propriedades titular e saldo, e métodos para depositar e sacar dinheiro.
  - Em seguida, crie classes `ContaCorrente` e `ContaPoupanca` que herdam de `Conta` e adicionam métodos específicos para suas funcionalidades, como taxa de juros ou limite de cheque especial.
- **6.js**: Desenvolva uma classe `Produto` com propriedades nome, preço e quantidade em estoque, e métodos para atualizar o estoque e calcular o valor total.
  - Em seguida, crie classes `Livro` e `Eletronico` que herdam de `Produto` e adicionam propriedades específicas, como autor ou marca.
- **7.js**: Crie uma classe `FiguraGeometrica` com propriedades cor e preenchimento, e métodos para desenhar e calcular a área.
  - Em seguida, desenvolva classes `Quadrado` e `Triangulo` que herdam de `FiguraGeometrica` e implementam métodos específicos para calcular a área dessas figuras.
- **8.js**: Implemente uma classe `Funcionario` com propriedades nome, salário e cargo, e um método para calcular o bônus anual.
  - Em seguida, crie classes `Gerente` e `Vendedor` que herdam de `Funcionario` e implementam métodos específicos para calcular o bônus, levando em consideração metas alcançadas ou desempenho.
- **9.js**: Desenvolva uma classe `Animal` com propriedades nome e tipo, e métodos para emitir um som e calcular a idade em anos humanos.
  - Em seguida, crie classes `Cachorro` e `Gato` que herdam de `Animal` e implementam métodos específicos para calcular a idade considerando a expectativa de vida de cada espécie.
- **10.js**: Crie uma classe `Veiculo` com propriedades marca e modelo, e um método para imprimir as informações do veículo.
  - Em seguida, implemente classes `Carro` e `Moto` que herdam de `Veiculo` e adicionam propriedades específicas, como número de portas ou cilindradas.

**Manipulação de Arrays**

- **1.js**: Crie uma função que recebe uma array de números e retorna a soma de todos os elementos.
- **2.js**: Desenvolva uma função que recebe uma array de strings e retorna uma nova array com as strings convertidas para maiúsculas.
- **3.js**: Implemente uma função que recebe uma array de objetos e retorna uma nova array apenas com os objetos que têm a propriedade "ativo" como verdadeira.
- **4.js**: Desenvolva uma função que recebe uma array de números e retorna uma nova array com os números ordenados de forma crescente.
- **5.js**: Implemente uma função que recebe uma array de strings e retorna uma nova array com as strings ordenadas por ordem alfabética.
- **6.js**: Crie uma função que recebe uma array de números e retorna o maior número da array.
- **7.js**: Desenvolva uma função que recebe uma array de objetos e uma chave, e retorna uma nova array com os valores dessa chave de cada objeto.
- **8.js**: Implemente uma função que recebe uma array de números e retorna a média aritmética desses números.
- **9.js**: Crie uma função que recebe uma array de números e retorna uma nova array com apenas os números pares.
- **10.js**: Desenvolva uma função que recebe uma array de strings e um caractere, e retorna uma nova array apenas com as strings que contêm esse caractere.
- **11.js**: Desenvolva uma função que recebe uma array de números e retorna verdadeiro se todos os números são positivos.
- **12.js**: Crie uma função que recebe uma array de objetos e uma função de filtro, e retorna uma nova array com os objetos que passam no filtro.
- **13.js**: Implemente uma função que recebe uma array de strings e um comprimento máximo, e retorna uma nova array com as strings truncadas (cortadas/encurtadas) se excederem esse comprimento.
- **14.js**: Crie uma função que recebe uma array de objetos e uma propriedade, e retorna a soma dos valores dessa propriedade em todos os objetos.
- **15.js**: Desenvolva uma função que recebe uma array de números e retorna uma nova array com os números multiplicados por um fator fornecido.
- **bonus.js**

**DOM**

- **1.js**: Programa que retorna no console as imagens do site.
  Utilize `querySelectorAll("")` para selecionar todas as imagens.
- **2.js**: Crie uma função que altera o texto de um elemento HTML.
  Utilize `getElementById("")` para selecionar o elemento pelo ID. Utilize `innerText` para modificar o texto do elemento.
- **3.js**: Desenvolva um programa que adiciona uma classe CSS a um elemento.
  Utilize `querySelector("")` para selecionar o elemento. Utilize `classList.add("")` para adicionar a classe.
- **4.js**: Implemente uma função que remove um elemento HTML do DOM.
  Utilize `getElementById("")` para selecionar o elemento pelo ID. Utilize `remove()` para remover o elemento.
- **5.js**: Crie um script que altera o atributo de uma imagem ao ser clicada.
  Utilize `querySelector("")` para selecionar a imagem. Utilize `addEventListener()` para adicionar um evento de clique. Utilize `setAttribute()` para alterar o atributo da imagem.
- **6.js**: Desenvolva um programa que insere um novo elemento HTML após outro.
  Utilize `querySelector("")` para selecionar o elemento de referência. Utilize `insertAdjacentHTML()` para inserir o novo elemento.
- **7.js**: Implemente uma função que cria uma lista de itens e a adiciona ao DOM.
  Utilize `createElement()` para criar os elementos da lista. Utilize `appendChild()` para adicionar os elementos à lista.
- **8.js**: Crie um script que verifica se um elemento possui uma determinada classe.
  Utilize `classList.contains("")` para verificar a presença da classe.
- **9.js**: Desenvolva um programa que altera o estilo de um elemento ao passar o mouse sobre ele.
  Utilize `querySelector("")` para selecionar o elemento. Utilize `addEventListener()` para adicionar eventos de mouseover e mouseout. Utilize `style` para modificar o estilo do elemento.
- **10.js**: Implemente uma função que busca e retorna todos os links de um documento.
  Utilize `getElementsByTagName("")` para selecionar todos os elementos de âncora. Percorra a lista de elementos e extraia os links.
- **bonus.js**

## Funcionalidades:

- Cada arquivo aborda um exercício específico.
- Soluções simples e explicativas.

## Como Usar:

1. Clone o repositório
2. Navegue até o diretório: `cd nome-do-repositorio`
3. Execute cada programa com o seu HTML correspondente no Browser desejado.
   Caso o mesmo não possua um HTML correspondente basta rodar o comando 'node arquivo.js'
   Recomendo fortemente a utilização da extensão para VSCODE: lIVE Server

## Estrutura do Projeto:

- **Orientação a Objetos**

  - 1.js
  - ...
  - 10.js

- **Manipulação de Arrays**

  - 1.js
  - ...
  - 15.js

- **DOM**
  - 1.js
  - ...
  - 10.js

## Autor

Desenvolvido por Diego Franco.

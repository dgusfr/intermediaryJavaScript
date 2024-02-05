class Produto {
  constructor(nome, preco, quantidadeEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
  }

  atualizarEstoque(quantidade) {
    this.quantidadeEstoque += quantidade;
  }

  calcularValorTotal() {
    return this.preco * this.quantidadeEstoque;
  }
}

class Livro extends Produto {
  constructor(nome, preco, quantidadeEstoque, autor) {
    super(nome, preco, quantidadeEstoque);
    this.autor = autor;
  }
}

class Eletronico extends Produto {
  constructor(nome, preco, quantidadeEstoque, marca) {
    super(nome, preco, quantidadeEstoque);
    this.marca = marca;
  }
}

const meuLivro = new Livro(
  "JavaScript: The Good Parts",
  50,
  100,
  "Douglas Crockford"
);
console.log("Valor total dos livros:", meuLivro.calcularValorTotal());

const meuEletronico = new Eletronico("Smartphone", 800, 50, "Samsung");
console.log("Valor total dos eletrônicos:", meuEletronico.calcularValorTotal());

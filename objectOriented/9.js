class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  emitirSom() {
    console.log("Som genérico de animal");
  }

  calcularIdadeHumana(idadeAnimal) {
    // Implementação padrão para calcular idade em anos humanos, pode ser sobrescrita nas classes filhas
    return idadeAnimal * 7;
  }
}

class Cachorro extends Animal {
  constructor(nome, tipo, expectativaVida) {
    super(nome, tipo);
    this.expectativaVida = expectativaVida; // Expectativa de vida em anos
  }

  calcularIdadeHumana(idadeCachorro) {
    return idadeCachorro * 7; // Um ano de cachorro equivale a sete anos humanos
  }
}

class Gato extends Animal {
  constructor(nome, tipo, expectativaVida) {
    super(nome, tipo);
    this.expectativaVida = expectativaVida; // Expectativa de vida em anos
  }

  calcularIdadeHumana(idadeGato) {
    return idadeGato * 5; // Um ano de gato equivale a cinco anos humanos
  }
}

const cachorro = new Cachorro("Rex", "Cachorro", 15);
console.log("Idade humana do cachorro:", cachorro.calcularIdadeHumana(3));

const gato = new Gato("Whiskers", "Gato", 12);
console.log("Idade humana do gato:", gato.calcularIdadeHumana(4));

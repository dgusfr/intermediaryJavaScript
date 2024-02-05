class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  emitirSom() {
    console.log("Som genérico de animal");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Au Au");
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("Miau");
  }
}

const meuCachorro = new Cachorro("Rex", "Cachorro");
meuCachorro.emitirSom();

const meuGato = new Gato("Whiskers", "Gato");
meuGato.emitirSom();

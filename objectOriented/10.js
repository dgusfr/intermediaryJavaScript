class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  imprimirInformacoes() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, numPortas) {
    super(marca, modelo);
    this.numPortas = numPortas;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, cilindradas) {
    super(marca, modelo);
    this.cilindradas = cilindradas;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 4);
meuCarro.imprimirInformacoes();

const minhaMoto = new Moto("Honda", "CBR600", "600cc");
minhaMoto.imprimirInformacoes();

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
    //Chama o construtor da classe pai e inicializar as propriedades herdadas.
    super(marca, modelo);
    this.numPortas = numPortas;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 4);
meuCarro.imprimirInformacoes();

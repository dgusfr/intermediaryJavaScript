class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  imprimirInformacoes() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, cargo, salario) {
    super(nome, idade);
    this.cargo = cargo;
    this.salario = salario;
  }
}

const novoFuncionario = new Funcionario("João", 30, "Desenvolvedor", 5000);
novoFuncionario.imprimirInformacoes();

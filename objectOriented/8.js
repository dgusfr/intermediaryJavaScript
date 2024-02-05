class Funcionario {
  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  calcularBonusAnual() {
    return this.salario * 0.1;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, cargo, metasAlcancadas) {
    super(nome, salario, cargo);
    this.metasAlcancadas = metasAlcancadas;
  }

  calcularBonusAnual() {
    const bonusPadrao = super.calcularBonusAnual();
    const bonusPorMetas = this.metasAlcancadas * 0.5;
    return bonusPadrao + bonusPorMetas;
  }
}

class Vendedor extends Funcionario {
  constructor(nome, salario, cargo, desempenho) {
    super(nome, salario, cargo);
    this.desempenho = desempenho;
  }

  calcularBonusAnual() {
    const bonusPadrao = super.calcularBonusAnual();
    const bonusPorDesempenho = this.desempenho * 100;
    return bonusPadrao + bonusPorDesempenho;
  }
}

const gerente = new Gerente("João", 5000, "Gerente de Vendas", 10);
console.log("Bônus anual do gerente:", gerente.calcularBonusAnual());

const vendedor = new Vendedor("Maria", 3000, "Vendedor", 8);
console.log("Bônus anual do vendedor:", vendedor.calcularBonusAnual());

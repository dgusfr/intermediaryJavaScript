class Conta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      console.log("Saldo insuficiente.");
      return false;
    }
  }
}

class ContaCorrente extends Conta {
  constructor(titular, saldo, limiteChequeEspecial) {
    super(titular, saldo);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }
}

class ContaPoupanca extends Conta {
  constructor(titular, saldo, taxaJuros) {
    super(titular, saldo);
    this.taxaJuros = taxaJuros;
  }
}

const minhaContaCorrente = new ContaCorrente("Diego", 1000, 500);
minhaContaCorrente.depositar(200);
console.log("Saldo da conta corrente:", minhaContaCorrente.saldo);

const minhaContaPoupanca = new ContaPoupanca("Diego", 5000, 0.05);
minhaContaPoupanca.sacar(1000);
console.log("Saldo da conta poupança:", minhaContaPoupanca.saldo);

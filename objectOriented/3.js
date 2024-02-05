class Shape {
  constructor(cor, preenchimento) {
    this.cor = cor;
    this.preenchimento = preenchimento;
  }

  desenhar() {
    console.log(`Desenhando uma forma ${this.cor} ${this.preenchimento}`);
  }

  calcularArea() {
    console.log("Área genérica");
  }
}

class Retangulo extends Shape {
  constructor(cor, preenchimento, altura, largura) {
    super(cor, preenchimento);
    this.altura = altura;
    this.largura = largura;
  }

  calcularArea() {
    return this.altura * this.largura;
  }
}

class Circulo extends Shape {
  constructor(cor, preenchimento, raio) {
    super(cor, preenchimento);
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }
}

const retangulo = new Retangulo("vermelho", "sólido", 5, 10);
retangulo.desenhar();
console.log("Área do retângulo:", retangulo.calcularArea());

const circulo = new Circulo("azul", "sólido", 7);
circulo.desenhar();
console.log("Área do círculo:", circulo.calcularArea());

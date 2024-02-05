class FiguraGeometrica {
  constructor(cor, preenchimento) {
    this.cor = cor;
    this.preenchimento = preenchimento;
  }

  desenhar() {
    console.log(`Desenhando uma figura ${this.cor} ${this.preenchimento}`);
  }

  calcularArea() {
    console.log("Área genérica");
  }
}

class Quadrado extends FiguraGeometrica {
  constructor(cor, preenchimento, lado) {
    super(cor, preenchimento);
    this.lado = lado;
  }

  calcularArea() {
    return this.lado ** 2;
  }
}

class Triangulo extends FiguraGeometrica {
  constructor(cor, preenchimento, base, altura) {
    super(cor, preenchimento);
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

const quadrado = new Quadrado("vermelho", "sólido", 5);
console.log("Área do quadrado:", quadrado.calcularArea());

const triangulo = new Triangulo("azul", "sólido", 5, 8);
console.log("Área do triângulo:", triangulo.calcularArea());

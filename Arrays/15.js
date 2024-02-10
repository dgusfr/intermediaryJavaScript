function multiplicarPorFator(array, fator) {
  return array.map((numero) => numero * fator);
}

const numeros = [1, 2, 3, 4, 5];
const fator = 3;
const numerosMultiplicados = multiplicarPorFator(numeros, fator);
console.log(numerosMultiplicados); // Saída: [2, 4, 6, 8, 10]

function saoTodosPositivos(arrayDeNumeros) {
  return arrayDeNumeros.every((numero) => numero > 0);
}

const numeros1 = [10, 5, 20, 8, 15];
const numeros2 = [10, -5, 20, 8, 15];
console.log(saoTodosPositivos(numeros1)); // Saída: true
console.log(saoTodosPositivos(numeros2)); // Saída: false

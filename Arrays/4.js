function ordenarNumeros(arrayDeNumeros) {
  return arrayDeNumeros.slice().sort((a, b) => a - b);
}

const numeros = [5, 2, 8, 1, 3];
const numerosOrdenados = ordenarNumeros(numeros);
console.log(numerosOrdenados);

function entraPares(array) {
  if (array.length === 0) {
    return "A array está vazia.";
  }

  let pares = [];
  array.forEach((numero) => {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  });
  return pares;
}

const numeros = [10, 5, 20, 8, 15];
console.log(entraPares(numeros));

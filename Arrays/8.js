function calculaMedia(array) {
  if (array.length === 0) {
    return "A array está vazia.";
  }

  let soma = 0;
  array.forEach((numero) => {
    soma = soma + numero;
  });

  return soma / array.length;
}

const numeros = [10, 5, 20, 8, 15];
console.log(calculaMedia(numeros)); // Saída: 11.6

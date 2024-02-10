function encontraMaiorNumero(array) {
  if (array.length == 0) {
    console.log("A array está vazia");
  }
  let maior = array[0];
  array.forEach((numero) => {
    if (numero > maior) {
      maior = numero;
    }
  });
  return maior;
}

const numeros = [10, 5, 20, 8, 15];
console.log(encontraMaiorNumero(numeros));

//**********Ou usando Math************//

function encontrarMaior(array) {
  if (array.length === 0) {
    return "A array está vazia.";
  }
  return Math.max(...array);
}

const algunsNumeros = [10, 5, 20, 8, 15];
console.log(encontrarMaior(algunsNumeros));

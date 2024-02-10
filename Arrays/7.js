function extraiValores(array, chave) {
  return array.map(function (objeto) {
    return objeto[chave];
  });
}

const pessoas = [
  { nome: "Diego", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "João", idade: 35 },
];

const idades = extraiValores(pessoas, "idade");
console.log(idades); // Saída: [30, 25, 35]

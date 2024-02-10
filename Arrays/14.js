function somarPropriedadeEmObjetos(array, propriedade) {
  let soma = 0;
  array.forEach((objeto) => {
    soma += objeto[propriedade];
  });
  return soma;
}

const produtos = [
  { nome: "Camiseta", preco: 20 },
  { nome: "Calça", preco: 30 },
  { nome: "Boné", preco: 15 },
];

const totalPrecos = somarPropriedadeEmObjetos(produtos, "preco");
console.log(totalPrecos); // Saída: 65

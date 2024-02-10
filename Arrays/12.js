function filtrarObjetos(array, filtro) {
  return array.filter(filtro);
}

const pessoas = [
  { nome: "Diego", idade: 10 },
  { nome: "Maria", idade: 25 },
  { nome: "João", idade: 35 },
];

function filtroIdadeMaiorQue28(pessoa) {
  return pessoa.idade > 18;
}

const pessoasFiltradas = filtrarObjetos(pessoas, filtroIdadeMaiorQue28);
console.log(pessoasFiltradas);

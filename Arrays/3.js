function filtrarAtivos(arrayDeObjetos) {
  return arrayDeObjetos.filter((objeto) => objeto.ativo === true);
}

const arrayDeObjetos = [
  { nome: "Objeto 1", ativo: true },
  { nome: "Objeto 2", ativo: false },
  { nome: "Objeto 3", ativo: true },
  { nome: "Objeto 4", ativo: false },
];

const objetosAtivos = filtrarAtivos(arrayDeObjetos);
console.log(objetosAtivos);

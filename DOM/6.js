// Desenvolva um programa que insere um novo elemento HTML após outro.
// Utilize querySelector("") para selecionar o elemento de referência. Utilize insertAdjacentHTML() para inserir o novo elemento.
const elementoReferencia = document.querySelector(".referencia");
elementoReferencia.insertAdjacentHTML("afterend", "<div>Novo Elemento</div>");

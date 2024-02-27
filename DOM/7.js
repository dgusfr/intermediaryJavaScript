// Implemente uma função que cria uma lista de itens e a adiciona ao DOM.
// Utilize createElement() para criar os elementos da lista. Utilize appendChild() para adicionar os elementos à lista.
function criarLista() {
  const lista = document.createElement("ul");
  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${i}`;
    lista.appendChild(item);
  }
  document.body.appendChild(lista);
}

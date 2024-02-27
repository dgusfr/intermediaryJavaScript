// Implemente uma função que busca e retorna todos os links de um documento.
// Utilize getElementsByTagName("") para selecionar todos os elementos de âncora. Percorra a lista de elementos e extraia os links.
function buscarLinks() {
  const links = [];
  const elementos = document.getElementsByTagName("a");
  for (let i = 0; i < elementos.length; i++) {
    links.push(elementos[i].href);
  }
  return links;
}

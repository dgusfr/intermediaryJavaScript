// Desenvolva um programa que altera o estilo de um elemento ao passar o mouse sobre ele.
// Utilize querySelector("") para selecionar o elemento. Utilize addEventListener() para adicionar eventos de mouseover e mouseout. Utilize style para modificar o estilo do elemento.
const elemento = document.querySelector(".elemento");
elemento.addEventListener("mouseover", function () {
  elemento.style.color = "red";
});
elemento.addEventListener("mouseout", function () {
  elemento.style.color = "black";
});

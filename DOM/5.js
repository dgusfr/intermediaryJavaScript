// Crie um script que altera o atributo de uma imagem ao ser clicada.
// Utilize querySelector("") para selecionar a imagem. Utilize addEventListener() para adicionar um evento de clique. Utilize setAttribute() para alterar o atributo da imagem.
const imagem = document.querySelector("img");
imagem.addEventListener("click", function () {
  imagem.setAttribute("src", "nova-imagem.jpg");
});

// Crie um script que verifica se um elemento possui uma determinada classe.
// Utilize classList.contains("") para verificar a presença da classe.
const elemento = document.querySelector(".elemento");
if (elemento.classList.contains("minhaClasse")) {
  console.log("O elemento possui a classe minhaClasse.");
} else {
  console.log("O elemento não possui a classe minhaClasse.");
}

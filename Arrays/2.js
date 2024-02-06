function converterParaMaiusculas(strings) {
  return strings.map((string) => string.toUpperCase());
}

const arrayDeStrings = ["banana", "maçã", "laranja"];
console.log(converterParaMaiusculas(arrayDeStrings));
// Saída: ["BANANA", "MAÇÃ", "LARANJA"]

function filtrarStringsPorCaractere(arrayDeStrings, caractere) {
  const stringsComCaractere = [];

  arrayDeStrings.forEach((string) => {
    if (string.includes(caractere)) {
      stringsComCaractere.push(string);
    }
  });

  return stringsComCaractere;
}

const palavras = ["cachorro", "gato", "elefante", "cobra", "macaco"];
const caractere = "t";
console.log(filtrarStringsPorCaractere(palavras, caractere));

function truncarStrings(array, comprimentoMaximo) {
  return array.map((string) => {
    if (string.length > comprimentoMaximo) {
      //Mettodo substring que extrai parte da string de 0 até o tamanho máximo
      return string.substring(0, comprimentoMaximo);
    } else {
      return string;
    }
  });
}

const palavras = ["banana", "abacaxi", "laranja", "melancia"];
const comprimentoMaximo = 5;

console.log(truncarStrings(palavras, comprimentoMaximo));
// Saída: ['banan', 'abaca', 'laran', 'mela']

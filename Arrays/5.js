function ordenarStrings(arrayDeStrings) {
  return arrayDeStrings.slice().sort();
}

const strings = ["banana", "abacaxi", "laranja", "uva", "maçã"];
const stringsOrdenadas = ordenarStrings(strings);
console.log(stringsOrdenadas);

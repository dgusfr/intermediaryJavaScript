const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

//**********************RESPOSTAS*************************

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();

// Adicione 'Arroz' ao final da array
comidas.push("Arroz");

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");

//*****
// Arrume os estudantes em ordem alfabética
estudantes.sort();

// Inverta a ordem dos estudantes
estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
const joanaPresente = estudantes.includes("Joana");
console.log(joanaPresente);

// Verifique se Juliana faz parte dos estudantes
const julianaPresente = estudantes.includes("Juliana");
console.log(julianaPresente);

// Substitua section por ul e div com li, utilizando split e join
html = html.split("section").join("ul").split("div").join("li");
console.log(html);

//*****
// Remova o último carro, mas antes salve a array original em outra variável
const carrosCopia = carros.slice();
carros.pop();

console.log(carros);
console.log(carrosCopia);

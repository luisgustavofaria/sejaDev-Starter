const person = {
  name: "José",
  lastName: "Fortes",
}

// Object.keys(): Cria um array com todas as chaves do objeto
//console.log(Object.keys(person))

// Object.values(): Cria um array com todos os valores do objeto
//console.log(Object.values(person))

// Object.entries(): cria um array com um array de objetos e valores
/*
  [['name', 'José'], ['lastName', 'Fortes']]
*/

const livros = {
  'Livro A': 19.90,
  'Livro B': 97.00,
  'Livro C': 20.00
}

const values = Object.values(livros)
// values = [19.90, 97.00, 20.00]
const sum = values.reduce((val, acc) => val + acc, 0)

console.log(sum)

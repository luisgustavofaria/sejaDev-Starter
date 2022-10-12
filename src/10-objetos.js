const num = 10
const pessoa = {
  nome: "José",
  idade: 20,
  casado: true,
  notas: [5, 8, 100],
  endereco: {
    rua: "Rua xyz",
    numero: 100,
  }
}

console.log(pessoa["nome"])
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa.idade)
console.log(pessoa["casado"])
console.log(pessoa.casado)
console.log(pessoa["notas"][2])
console.log(pessoa.notas[2])
console.log(pessoa["endereco"]["rua"])
console.log(pessoa.endereco.rua)

const array = [pessoa, pessoa]
console.log(array)
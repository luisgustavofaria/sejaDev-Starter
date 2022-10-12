const pessoa = {
  nome: "José",
  sobrenome: "Fortes",
  idade: 27,
  senha: "123"
}

const { nome, idade } = pessoa
// const nome = pessoa.nome
// const idade = pessoa.idade

//console.log(nome)
//console.log(idade)

/*
const pessoaAtualizada = {
  ...pessoa,
  idade: 30,
  senha: "456"
}
*/


const array = [10, 20, 3, 4]
const [a, b] = array

const newArray = [0 ,...array, 5]
console.log(newArray)

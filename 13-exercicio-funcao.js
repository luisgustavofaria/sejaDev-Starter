/*
Crie um algorítmo para calcular o fatorial de um número n!.

Obs.: O fatorial de um número é calculado pela multiplicação 
desse número por todos os seus antecessores até chegar ao número 1

Exemplos: 
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
*/

function fatorial (n) {
  let resposta = 1
  while (n >= 2) {
    resposta = resposta * n
    n--
  }
  return resposta
}

const number = 10
const resposta = fatorial(number)
console.log(resposta)
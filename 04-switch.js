/*
Dado um numero, construir uma logica para imprimir
o nome do mês do número
exemplo: 

1 - console.log("Janeiro")
2 - console.log("Fevereiro")
...
12 - console.log("Dezembro")
!== 1...12 - console.log("Mês inexistente")
*/

const numero = 13

switch (numero) {
  case 1:
    console.log("Janeiro")
  break
  case 2:
    console.log("Fevereiro")
  break
  case 3:
    console.log("Março")
  break
  case 4:
    console.log("Abril")
  break
  default:
    console.log("Mês inexistente")
  break
}
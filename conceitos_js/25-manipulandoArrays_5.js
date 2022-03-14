// Transformando array em outro tipo de dados

// Join
// Transforma a array em string e
// separa cada elemento por um caracter
// indicado no parâmetro

const arr = [1, 2, 3, 4, 5]
const arrJoin = arr.join('-')

console.log(arrJoin)

// Reduce
// Retorna um novo tipo de dado iterando
// cada posição de um array
// arr.reduce((acumulador, valor, index, array) => {}, valorInicialDoAcumulador)

//const arr = [1, 2, 3, 4, 5]
const arrReduce = arr.reduce((total, value) => total += value, 0)

console.log(arrReduce)


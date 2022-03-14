// Buscar Elementos

// find
// Retorna o primeiro valor a satisfazer 
// a condição.

const arr = [1, 2, 3, 4, 5]
const firstGreaterThanTwo = arr.find(value => value > 2)

console.log(firstGreaterThanTwo)

// findIndex
// Retorna o indice do primeiro item a satisfazer 
// a condição.

//const arr = [1, 2, 3, 4, 5]
const firstGreaterThanTwoIndex = arr.findIndex(value => value > 2)

console.log(firstGreaterThanTwoIndex)

// filter
// retorna um novo array com todos os elementos
// que satisfazem a condição

//const arr = [1, 2, 3, 4, 5]
const filterOdd = arr.filter(value => value % 2 !== 0)

console.log(filterOdd)

// indexOf
// retorna o index do primeiro elemento na array
// indicado no parâmetro

//const arr = [1, 2, 3, 4, 5]
const firstIndexOf = arr.indexOf(3)

console.log(firstIndexOf)

// lastIndexOf
// retorna o index do ultimo elemento na array
// indicado no parâmetro

//const arr = [1, 2, 3, 4, 5, 3]
const lastIndexOf = arr.lastIndexOf(3)

console.log(lastIndexOf)

// includes
// Retorna um boolean verificando se
// determinado elemento existe no array

//const arr = [1, 2, 3, 4, 5]
const arrIncludesTrue = arr.includes(3)
const arrincludesFalse = arr.includes(6)

console.log(arrIncludesTrue) // true
console.log(arrincludesFalse) // false

// some
// Retorna um boolean verificando se
// algum elemento existente no array
// cumpre a condição.

const arrSomeEven = [1, 1, 3, 4, 5]
const arrNoneEven = [1, 1, 3, 5, 5]

const hasSomeEvenTrue = arrSomeEven.some(value => value % 2 === 0)
const hasSomeEvenFalse = arrNoneEven.some(value => value % 2 === 0)

console.log(hasSomeEvenTrue) // true
console.log(hasSomeEvenFalse) // false

// every
// Retorna um boolean verificando se
// todos os elementos no array cumprem a
// condiçao

//const arrSomeEven = [1, 1, 3, 4, 5]
//const arrNoneEven = [1, 1, 3, 5, 5]


const hasEveryOddTrue= arrNoneEven.every(value => value % 2 !== 0)
const hasEveryOddFalse = arrSomeEven.every(value => value % 2 !== 0)

console.log(hasEveryOddTrue) // true
console.log(hasEveryOddFalse) // false


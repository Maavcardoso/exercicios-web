// array.push()
// Adicionar um ou mais elementos no fim do
// array e retorna o tamanho do novo array.

//const frutas = ['banana', 'melancia', 'abacate']
const arrLength = frutas.push('acerola')

console.log(arrLength) // retorna n de elementos

console.log(frutas) // Array com valor adicionado

// array.pop()
// Remove o ultimo elemento do array e
// retorna o item removido

//const frutas = ['banana', 'melancia', 'abacate']
const arrPop = frutas.pop()

console.log(arrPop)

console.log(frutas)

// array.unshift()
// Adiciona um ou mais elementos no começo da array
// e retorna o tamanho da nova array

//const frutas = ['banana', 'melancia', 'abacate']
const arrUnshift = frutas.unshift('acerola')

console.log(arrUnshift)

console.log(frutas)

// array.shift()
// Remove o primeiro elemento da array e
// retorna o item removido

//const frutas = ['banana', 'melancia', 'abacate']
const arrShift = frutas.shift()

console.log(arrShift)

console.log(frutas)

// array.concat()
// concatena um ou mais arrays retornando um novo array

//const frutas = ['banana', 'melancia', 'abacate']
const salgados = ['Kibe', 'Coxinha', 'Empada']

const lanchinhos = frutas.concat(salgados)

console.log(lanchinhos)

// array.slice()
// Retorna um array o fatiando de acordo com inicio e fim

const arrNum = [1, 2, 3, 4, 5]

console.log(arrNum.slice(0, 2))
console.log(arrNum.slice(2))
console.log(arrNum.slice(-1))
console.log(arrNum.slice(-3))

// array.splice()

// Altera um array adicionando novos elementos
// enquanto remove elementos antigos

//const frutas = ['banana', 'melancia', 'abacate']
const frutaSplite = frutas.splice(1,0,'Acerola') // Adiciona novo item
                                          // na segunda posição, sem excluir nenhum item
console.log(frutas)

const frutasSplite2 = frutas.splice(2, 1, 'Laranja', 'Amora')

console.log(frutas)
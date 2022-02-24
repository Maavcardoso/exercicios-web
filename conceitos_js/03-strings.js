// Algumas formas de manipular uma string em JS
const text = "Teste"

// retorna o tamanho da string
const textSize = text.length
console.log(`\nQuantidade de letras: ${textSize}`) 

// retorna um array quebrando a string por um delimitador
const splittedText = text.split('s')
console.log('\nArray com as posições separadas pelo delimitador s:', splittedText)

// Busca um valor e o substitui.
const replacedText = text.replace('Test', 'Leit')
console.log('\nSubstituindo valor:', replacedText)

// Retorna o conteúdo da posição da string
const lastChar = text.slice(-1)
console.log('\nUltima letra da string:', lastChar)

const withoutLastChar = text.slice(0, -1)
console.log('\nString sem a ultima letra:', withoutLastChar)

const secondToEnd = text.slice(1)
console.log('\nString a partir da segunda letra:', secondToEnd)

// Retorna N caracteres a partir de uma posição.
// const twoBeforeFirstPos = text.substr(0,2) // Está ultrapassado. Hoje se usa .substring

const twoBeforeFirstPos = text.substring(0,2)
console.log('\nAs duas primeiras letras são:', twoBeforeFirstPos)

const pi = 3.14159265
console.log('\nstrings de números')

// Transforma número em string
const numAsStr = pi.toString()
console.log(`\nTipo da variável pi\nantes .toString: ${typeof pi}\napós .toString: ${typeof numAsStr}`)

// Retorna o número com x casas decimais.
const fixedTwoDecimals = pi.toFixed(2)
console.log(`\n${pi} após .toFixed: ${fixedTwoDecimals}`)

// Transforma uma string em float
console.log("\nParse para Float:", parseFloat('15.40'))

// Transforma uma string em int
console.log("\nParse para int:", parseInt('13.20'))
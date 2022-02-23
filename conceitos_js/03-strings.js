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
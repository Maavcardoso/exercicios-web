// Algumas formas de manipular uma string em JS

const text = "Teste"

// retorna o tamanho da string
const textSize = text.length
console.log(`Quantidade de letras: ${textSize}`) 

// retorna um array quebrando a string por um delimitador
const splittedText = text.split('s')
console.log('\nArray com as posições separadas pelo delimitador s:', splittedText)
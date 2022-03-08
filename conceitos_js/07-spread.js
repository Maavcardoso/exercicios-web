// Spread ...
// É equivalente a iterar um array, mas apenas usando um operador.

const frase = ['mou', 'shindeiru']
const nani = ['Omae', 'wa', ...frase]
console.log(nani)

function fn(x, y, z){
    return x + y + z
}
args = [1, 2, 3]
console.log('\nSoma da string args:',fn(...args))


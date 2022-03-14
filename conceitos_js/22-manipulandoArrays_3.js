// Iterar elementos

// forEach
// Iteração de cada item dentro do array

const arr = [1, 2, 3, 4, 5]

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`)
})

// map

// Executa uma função e itera uma nova array.

//const arr = [1, 2, 3, 4, 5]

const arrMap = arr.map((num, index) => `${index + num}`)

console.log(arrMap)

// flat
// Retorna um novo array com todos elementos
// de um sub-array concatenados de forma recursiva
// de acordo com a profundidade especificada. (depth)

const arrSubArr = [1, 2, [3, 4]]
const arrFlat = arrSubArr.flat()

console.log(arrFlat)

// flatmap
// Retorna um novo array assim como a função map e
// executa um flat de profundidade 1

//const arr = [1, 2, 3, 4, 5]
const arrFlatMap = arr.flatMap(value => [value * 2])

const arrFlatMap2 = arr.flatMap(value => [[value * 2]])

console.log(arrFlatMap)
console.log(arrFlatMap2)

// keys
// Retorna um array iterator que contém
// as chaves para cada elemento do array

//const arr = [1, 2, 3, 4, 5]

const arrIteratorKey = arr.keys();

do{
    arrBool = arrIteratorKey.next()
    console.log(arrBool)
} while (arrBool.done === false)

// values
// Retorna um array iterator que contém
// os valores para cada elemento do array

//const arr = [1, 2, 3, 4, 5]

const arrIteratorValue = arr.values();

do{
    arrBool = arrIteratorValue.next()
    console.log(arrBool)
} while (arrBool.done !== true)

// entries
// Retorna um array iterator que contem pares
// chave/valor para cada elemento do array

//const arr = [1, 2, 3, 4, 5]

const arrIteratorEntries = arr.entries();

do{
    arrBool = arrIteratorEntries.next()
    console.log(arrBool)
} while (arrBool.done !== true)






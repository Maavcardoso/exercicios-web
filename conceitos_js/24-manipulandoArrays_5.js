// Ordenando Elementos

// sort
// Ordena elementos de um array de
// acordo com a condição.

const students = [
    {
        name: 'Joseph',
        nota: 10,
    },
    {
        name: 'Dio',
        nota: 7, 
    },
    {
        name: 'Okuyasu',
        nota: 4
    }
]

const arrSort = students.sort((current, next) => current.nota - next.nota)
console.log(arrSort) // Retorna primeiro o objeti com a menor nota

// Reverse
// Ordena elementos de um array 
// ao contrário do original

const arr = [1, 2, 3, 4, 5]
arrReverse = arr.reverse()
console.log(arrReverse)



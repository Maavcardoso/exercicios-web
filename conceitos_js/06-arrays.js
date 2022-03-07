const users = ['Anna, Lais, Beatriz']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

// Array de objetos
const persons = [
    {
        name: 'Zezão',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Jorel',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Donizete',
        age: 14,
        gender: gender.WOMAN
    }

]

// retorna a quantidade de itens de um array
console.log('Items:', persons.lenght);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`nOME: ${person.name}`)
})

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)
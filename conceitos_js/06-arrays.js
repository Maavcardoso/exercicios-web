const users = ['Anna', 'Chico', 'Barbara']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

// 
const persons = [
    {
        name: users[0],
        age: 18,
        gender: gender.WOMAN

    },
    {
        name: users[1],
        age: 50,
        gender: gender.MAN
    },
    {
        name:users[2],
        age: 27,
        gender: gender.WOMAN
    }
]

// Retornar a quantidade de itens de um array
console.log('Itens na array:', persons.length)

//verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons))

// Iterar os itens do array
persons.forEach((person, index, arr) => {
console.log(`Nome: ${person.name}, Index: ${index}, Array como um todo:`, arr)
})

// Filtrar array
const womens = persons.filter(person => person.gender === gender.WOMAN)
console.log('\nNova lista apenas com mulheres:', womens)

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = "JS introduction"
    return person
})
console.log('\nPessoas com adição do Course', personsWithCourse)

// Transformar um array em outro tipo. O primeiro parametro é a nova variavel e os segundo a Array
const totalAge = persons.reduce((age, person) =>{
    age += person.age
    return age
}, 0)
console.log('\nSoma das idades:', totalAge)

// Juntando operações. Retorna a soma de todas as idades pares
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) =>{
                            age += person.age
                            return age
                        }, 0)
console.log('\nSoma da idade das pessoas com idade par:', totalEvenAges)
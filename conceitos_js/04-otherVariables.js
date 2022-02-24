const nullVar = null

console.log(typeof nullVar) // Pegadinha do JS

const undefinedVar = undefined

console.log(typeof undefinedVar)

// Objeto

let user ={
    name: 'Zé'
}

// Alterando a propriedade de um objeto

console.log(user);

user.name = 'Ronaldo'
console.log(user)

user['name'] = 'Matuzalem'
console.log(user)

const prop = "name"
user[prop] = 'Dino'
console.log(user)

user.lastname = "da Silva Sauro"
console.log(user)

delete user.name
console.log(user)

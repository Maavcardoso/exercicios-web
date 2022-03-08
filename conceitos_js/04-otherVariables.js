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

// Funções de Object

user = {
    name: "Son Goku",
    lastname: "Kakaroto"
}

// Recupera as chaves do objeto
console.log('\nPropriedades de objeto user:', Object.keys(user))

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user))

// Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user))
 
// Margear propriedades de objetos
Object.assign(user, {fullName: 'Son Goku Kakaroto'})

console.log('\nAdiciona a propriedade fullName no objeto user:', user) // Não recomendado, já que fere o principio da mutabilidade dos objetos
console.log('\nRetorna um novo objeto margeando dois ou mais objetos:', Object.assign({}, user, {age: 54})) // Preferencialmente, criamos um novo objeto e adicionamos uma nova propriedade

// Previne que o objeto seja alterado
const newObj = {foo: "bar"}
Object.freeze(newObj)

newObj.foo = "Mudei"
delete newObj.foo
newObj.bar = "foo"

console.log("\nValores de newObj após as alterações:", newObj)

// Permite apenas alteração das propriedades presentes no objeto.
const person = {name: 'Faforéu'}
Object.seal(person)

person.name = 'Zézão'
delete person.name
person.age = 26

console.log('\nVariavel person após alterações:', person)

// Symbol

const symbol1 = Symbol()
const symbol2 = Symbol()

// Symbols são únicos
console.log("\nsymbol1 = symbol2: ", symbol1 === symbol2)

// previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

user = {
    [nameSymbol1]: 'Ulala',
    [nameSymbol2]: 'Fidapu',
    lastName: 'Jackson'
}

console.log(user)


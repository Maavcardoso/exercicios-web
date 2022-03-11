// Encapsulamento por protótipo

function Person(initialName) {
    let name = initialName

    Object.defineProperty(this, 'name', {
        get: function() {
            return name
        },
        set: function(value) {
            name = value
        }
    })
}

const p1 = new Person('Lerigô')

console.log(p1)

p1.get()
p1.name
p1.set('Hoi')
p1.get()

// Encapsulamento por Classe

class Person {
    #name = ''

    constructor(name) {
        this.#name = name
    }

    getname() {
        return this.#name
    }

    setname(name) {
        this.#name = name
    }
}

const p2 = new Person('Lerigô')

console.log(p2)

console.log(p2.getname())
console.log(p2.name)
p2.setname('Hoi')
console.log(p2.getname())

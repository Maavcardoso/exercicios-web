
// um método static é uma função de uma classe 
// que não necessita que um objeto seja instanciado para ser utilizado
// segue o exemplo abaixo com protótipo

function Person() {}

Person.walk = function () {
    console.log('walking...')
}

console.log(Person.walk())

// Usando classe

class Person {
    static walk(){
        console.log('walking...')
    }
}

console.log(Person.walk())
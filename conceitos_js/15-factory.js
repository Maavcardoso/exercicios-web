// Factory
// Todas as funções que retornam
// um objeto, sem necessidade de chama-las
// com new são consideradas funções factory.

function pessoa(name){
    return {
        name,
        lastName: 'Da Silva'
    }
}

const p = pessoa('Lula')
console.log(p)

const p2 = pessoa({name: 'Custom', age:23})
console.log(p2)



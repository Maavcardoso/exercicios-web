// Singleton
// Criar uma única instância de uma função
// construtora e retorna-lá toda fez que for necessário
// utiliza-lá.

function Pessoa() {
    if(!Pessoa.instance){
        return Pessoa.instance = this
    }
    return Pessoa.instance
}

const p = Pessoa.call({name: 'Zé'})
const p2 = Pessoa.call({name: 'Custom'})

console.log(p)
console.log(p2)

// Singleton cria apenas uma instância do objeto pessoa, entao output sera retornará zé

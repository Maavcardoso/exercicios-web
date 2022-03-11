// Construtor em JS

function Pessoa(name){
    this.name = name
    // return { name : 'Return força o construtor a passar o parâmetro'}
}

const p = new Pessoa('Barbara')
console.log(p) 

// O construtor cria um developer (assumindo o papel de classe)
function Developer(name, age, isDeveloper){
    this.name = name
    this.age = age
    this.isDeveloper = isDeveloper || false

    // Extendendo o protótipo da função
    this.sabeCodar = () => console.log(isDeveloper ? `${name} sabe programar!` : `${name}, vamos aprender juntos!`)
}
var person1 = new Developer ("Zezão", 69, true)
var person2 = new Developer ("Jacó", 22)

person1.sabeCodar()
person2.sabeCodar()

// podemos criar um construtor dentro do construtor
// ( Herança )

function Veiculo(qtdDeRodas) {
    this.qtdDeRodas = qtdDeRodas
}

function Carro(antigo) {
    Veiculo.call(this, 4) // .call chama o próprio construtor, 4 é a quantidade de rodas

    this.antigo = antigo
}

const fusca = new Carro(true)
console.log(fusca)

// Vamos implementar mais metodos.
// Como todo veiculo acelera
// Podemos usar Veiculo.prototype para adicionar
// Um metodo acelerar, que será chamado sempre que qualquer
// Objeto do tipo Veiculo tenha o parâmetro, 
// Independente de ser um carro ou uma moto.

function Veiculo() {}

Veiculo.prototype.qtdDeRodas = 0
Veiculo.prototype.acelerar = () => {}

function Carro(antigo) {
    this.qtdDeRodas = 4
    this.antigo = antigo
}

Carro.prototype = Object.create(Veiculo) // Referenciamos prototype de Cachorro com Animal
Carro.prototype.buzinar = function(){
    console.log('BI! BI!')
}

const gol_quadrado = new Carro(true)
const C3 = new Carro(false)

console.log(gol_quadrado.__proto__)

// Herança com classes

class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 4
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4)
        this.morde = morde
    }
}

const pug = new Cachorro(false)

console.log(pug)

// Adicionando Metódos com classes

class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 4
    }
    movimentar(){}
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4)
        this.morde = morde
    }
    latir(){
        console.log('Au! Au!')
    }
}

const labrador = new Cachorro(false)
const pincher = new Cachorro(true)

console.log(pincher)
pincher.latir()
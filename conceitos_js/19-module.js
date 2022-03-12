// Permite organizar melhor o código,
// sem necessidade de expor variáveis globais

let name = 'default'

function getName(){
    return name
}

function setName(newName){
    name = newName
}

module.exports = {
    getName,
    setName
}

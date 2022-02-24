function fn(){
    return 'Oi chuchu'
}

const arrowFn = () => 'Lalala meu bem'

const arrowfn2 = () => {
    // mais de uma expressão
    return 'Agora retorna'
}

// Funções também são objetos
fn.prop = 'Propriedade aqui'
console.log(fn())
console.log(fn.prop)

// Receber parâmetros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)

//Receber e retornar funções
// const controlFnExec = fnParam => allowed => {
//     if (allowed) {
//       fnParam();
//     }
//   }

// const handleFnExecution = controlFnExec(fn)

// handleFnExecution(true)
// handleFnExecution()


//controlFnExec como função
// function controlFnExec(fnParam) {

//     return function(allowed) {
//       if (allowed) {
//         fnParam();
//       }
//     }
//   }

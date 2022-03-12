// Recebe uma outra função como parâmetro
// e estende seu comportamento sem modifica-lo
// explicitamente.

let loggedIn = false

function callIfAuthenticated(fn){
    return !!loggedIn && fn()
}

function sum (a, b){
    return a + b
}

console.log(callIfAuthenticated(()=>sum(2, 3)))
loggedIn = true
console.log(callIfAuthenticated(()=>sum(2, 3)))
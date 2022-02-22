// function soma(a, b){
//     return console.log(a + b)
// }

// soma(2, 2)
// soma(2, 3)
// soma(2, 4)
// soma(2, 5)

// Nessa situação o ideal seria usarmos apenas uma variável na função,
// já que todas as somas tem 2.
// Currying é transformar uma variável em uma função, que irá retornar soma

function soma(a){
    return function(b){
        return console.log(a + b)
    }
}

const soma2 = soma(2); // Instanciamos uma variável para atribuirmos o número
                       // que se repetirá.
soma2(2);
soma2(3);
soma2(4);
soma2(5);

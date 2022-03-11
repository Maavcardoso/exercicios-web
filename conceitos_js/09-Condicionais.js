
const array = [1, 2, 3, 4, 5, 6]

 // exemplo if else classico

array.forEach(number => {
    if(number % 2 === 0){
        console.log(`\nO número ${number} é par`)
    } else {
        console.log(`\nO número ${number} é impar`)
    }
})

// exemplo if - else if - else

console.log('\n'+'-=-'.repeat(15))

array.forEach(number =>{
    if(number % 2 === 0){
        console.log(`\nO número ${number} é divisível por 2`)
    }
    else if(number % 3 === 0){
        console.log(`\nO número ${number} é divisível por 3`)
    }
})

// Um erro proposital foi inserir o 6 na array. Por mais
// que 6 seja divisível por ambos, o output irá considerar apenas o 2
// pois a condição foi aplicada antes.
// para considerar as duas divisões, devemos tirar o else antes do if e aplicar multiplos ifs

console.log('\n'+'-=-'.repeat(15))

array.forEach(number =>{
    if(number % 2 === 0){
        console.log(`\nO número ${number} é divisível por 2`)
    }
    if(number % 3 === 0){
        console.log(`\nO número ${number} é divisível por 3`)
    }
})

// Como muitos itens poluem o visual do código e o torna mais dificil de ser interpretado,
// no caso como acima podemos usar switch

console.log('\n'+'-=-'.repeat(15))

const fruta = 'maçã'

switch (fruta){
    case 'banana':
        console.log('\nR$ 3,00 p/kg')
        break
    case 'limão':
    case 'abacaxi':
        console.log('\nR$ 5,00 p/kg')
        break // Se retirar o break o default é sempre executado.
    default:
        console.log('\nO produto não existe no estoque')
        break
}


//for 

let str = ''
for(let i = 0; i < 10; i++){
    str = str + i
}
console.log(str)

console.log('-=-'.repeat(15))

//while
var iWhile = 0
while (iWhile < 10){
    console.log(iWhile)
    iWhile++
}

// do - while
// do executa a função uma vez sem necessidade de cumprir
// a condição do while

console.log('-=-'.repeat(15))

iDo = 0

do{
    iDo += 1
    console.log(iDo)
} while (iDo < 5)



console.log('-=-'.repeat(15))


let arr = [3, 6, 9]
arr.foo = 'opa'

// for in
// percorre todo o objeto, retornando o index dos elementos

for (let i in arr) {
    console.log(i) // output: "0", "1", "2", "foo"
}

console.log('-=-'.repeat(15))

// for of
// itera apenas valores numericos do objeto

for (let i of arr) {
    console.log(i) // output: "3", "6", "9"
}

console.log('-=-'.repeat(15))

// break

var index = 0

while(true){
    index++

    if (index > 3) {
        break
    }

    console.log(index)
}

console.log('-=-'.repeat(15))

// continue

console.log('-=-'.repeat(15))

const continueArr = [1, 2, 3, 4, 5, 6]

for(let index = 0; index < continueArr.length; index++){
    if(continueArr[index] % 2 === 0) {
        continue
    }

    console.log(continueArr[index])
}
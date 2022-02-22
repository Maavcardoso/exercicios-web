function fc(){
    console.log(text)

    var text = "Testando"

    console.log(text)
}

fc();

/*
    Em outras linguagens, interagir com uma variável
    antes de declara-lá retornaria um erro de exceção, pois a variável
    não existe no momento da compilação.
    Contudo, no JS existe o hoisting. no momento que uma variável é compilada,
    a própria linguagem a instancia. 
    Por isso o primeiro console.log retorna Undefined, pois estamos acessando 
    o valor de uma variável vazia.

    Ilustrando o que escrevi acima:

function fc(){
    var text; // JS criou a variável
    console.log(text)  
    var text = "testando" // A variável "Original" é instanciada
    console.log(text)
}
*/ 

function fc(){
    log('Hoisting de função')
    function log(value){
        console.log(value)
    }
}

fc()

/* 
    Hoisting também funciona com funções. Nesse caso,
    ele cria a função log que engloba tanto o comando quanto
    a chamada da função.

    function fc(){
        function log(value){
            console.log(value);
        }

        log('Hoisting de função')
    }




*/
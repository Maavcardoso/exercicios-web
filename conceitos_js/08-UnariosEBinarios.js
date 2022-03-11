// delete algo
// delete something

// determina tipo
// typeof something

// in 
//something in somethingItems

// Arrays

var capitais = new Array('São Paulo','Rio de Janeiro','Belo Horizonte','Fortaleza')
0 in capitais // retorna true
3 in capitais // retorna true
4 in capitais // retorna false
'Rio de Janeiro' in  capitais // retorna false (Deve-se especificar o numero do indice
                              // Não o valor inserido nele)
'length' in capitais // retorna true (length é uma propriedade da array)

// Objetos pré-definidos
"PI" in Math // true
var myString = new String('opa')
"length" in myString // true

// Objetos personalizados

var carro = {marca:"Volkswagen", modelo:"Gol", ano: 1995}
"marca" in carro // true
"modelo" in carro // true


//instanceof

// objeto instanceof tipoObjeto

var dia = new Date(2022, 03, 09)

if (dia instanceof Date)(
    console.log('Lembranças de março 22')
)
// in 
//something in somethingItems

// Arrays

var capitais = new Array('São Paulo','Rio de Janeiro','Belo Horizonte','Fortaleza')
0 in capitais // retorna true
3 in capitais // retorna true
4 in capitais // retorna false
'Rio de Janeiro' in  capitais // retorna false (Deve-se especificar o numero do indice
                              // Não o valor inserido nele)
'Rio de Janeiro' in capitais[1] // agora retorna true
'length' in capitais // retorna true (length é uma propriedade da array)

const express = require('express')
const port = 3003

const bodyParser = require('body-parser');
const { text } = require('body-parser');
const app = express ();

app.use(bodyParser.urlencoded({ extended: true}))

app.listen(port,function(){
    console.log("Running PORT:" +port)
});


app.get('/', function (req,res){
    res.send ("Works!")
})


app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário Incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário Alterado!</h1>')
})

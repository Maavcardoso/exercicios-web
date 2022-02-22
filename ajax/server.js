const bodyParser = require('body-parser') // Essa variável guarda os dados da requisição.
const express = require('express')
const app = express()

app.use(express.static('.')) // Prove todos os arquivos estaticos da pasta (. representa a propria pasta)
app.use(bodyParser.urlencoded({ extended: true })) // Transforma dados do formulário em um objeto.
app.use(bodyParser.json()) // Se solicitar um arquivo .json na requisição, o retorna como objeto.

const multer = require('multer') // Responsável por interpretar o arquivo do upload
const storage = multer.diskStorage({ // objeto com Função diskStorage, personaliza a pasta e os arquivos
    destination: function (req, file, cb){ // Parametro destination esta contido em diskStorage.
        cb(null, './upload')               // Aqui se personaliza o caminho que os arquivos irão fazer upload. 
    },
    filename: function (req, file, cb){// Função de personalizar o nome dos arquivos salvos.
        cb(null,  `${Date.now()}_${file.originalname}`)
    }                              
     
})

const upload = multer({ storage }).single('arquivo') // cria constante com multer passando o objeto storage como parametro, e retornando a requisição como arquivo

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err){
            return res.end('Ocorreu um erro')
        }
        res.end('Concluído com sucesso!')
    })


})
app.post('/formulario', (req, res) =>{ //Função guardar formulário no server
    res.send({
        ...req.body, // Spread p/ selecionar toda a array do body da requisição
        id: 1, // Acrescenta um id ao conteudo

    })
})
app.get('/parOuImpar', (req, res) =>{
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/easterEgg', (req, res) => res.send('Olá, bem-vindo ao teste :)'))// no metodo get, se receber /teste, retorna ok
app.listen(8080, () => console.log('Server Aberto! Executando...'))
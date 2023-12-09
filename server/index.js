const rotas = require('./src/rotas/rotas')
const controlador = require('./src/controladores/controllerUser')
const express = require('express')

const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())





app.get('/', controlador.getall);

app.get('/getUser/:id' , controlador.get);

app.post("/createUser", controlador.post); 

app.put('/updateUser/:id', controlador.put);

app.delete('/deleteUser/:id', controlador.delete);

app.listen(3001, () => {
    console.log("o pai tá on")
})


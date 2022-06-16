const express = require('express')
const app = express()
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use('/html', express.static('html'));

app.use('/api', rutas) //se indica que las solicitudes que lleguen las mande al archivo rutas

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})
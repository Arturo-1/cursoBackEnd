const { Router } = require('express')
const router = Router()
const userRutas = require('./userRutas')
const productos = [
    { "title": "celular", "price": "1000", "thumbnail": "img-celular", "id": 1 },
    { "title": "tablet", "price": "2000", "thumbnail": "img-tablet", "id": 2 },
    { "title": "Laptop", "price": "5000", "thumbnail": "img-laptop", "id": 3 },
    { "title": "desktop", "price": "4000", "thumbnail": "img-desktop", "id": 4 }
]

// ruta para mostrar productos
router.get('/productos', (req, res) => {
    if (productos.length === 0) return res.status(404).send({ error: `Producto no Encontrado` })
    res.json(productos)
})

//ruta para mostrar elemento segun su id 
router.get('/productos/:id', (req, res) => {
    const { id } = req.params
    if (productos.length < id) return res.status(404).send({ error: `Producto no Encontrado` })
    res.json(productos[id - 1])

})

// ruta para validar insercion de elemento y mostrar su id 
router.post('/productos', (req, res) => {
    const idNew = productos.length + 1
    const { title, price, thumbnail } = req.body
    productos.push({ title, price, thumbnail, id: idNew })
    res.json(idNew)
    return
})

// ruta para actualizar elemento
router.put('/productos/:id', (req, res) => {
    const { id } = req.params
    if (productos.length < id) return res.status(404).send({ error: `Producto no Encontrado` })
    const { title, price, thumbnail } = req.body
    productos[id - 1] = ({ title, price, thumbnail, id: id })
    res.status(200).send(`Producto con id ${id} fue actualizado correctamente`)

})

// ruta para eliminar producto
router.delete('/productos/:id', (req, res) => {
    const { id } = req.params
    if (productos.length < id) return res.status(404).send({ error: `Producto no Encontrado` })
    productos[id - 1] = { null: 'null' }
    res.status(200).send(`Producto con id ${id} fue eliminado correctamente`)

})

router.get('/user', userRutas)

module.exports = router
const express = require('express')
const fs = require('fs')
const app = express()
const puerto = 8080
let Productos = [];


class Contenedor {
    constructor(NombreArchivo) {
        this.NombreArchivo = NombreArchivo;

    }

    async getAll() {
        try {
            Productos = JSON.parse(
                await fs.promises.readFile(`./${this.NombreArchivo}`, "utf-8")
            );
        } catch (error) {
            console.log(error);
        }
    }
}

const productos = new Contenedor("productos.txt");


app.get('/', (req, res) => {

    res.send('Bienvenido al servidor copie ruta que desea visitar: <br> /productos  <br> /productoRandom')
})

app.get('/productos', async(req, res) => {

    await productos.getAll();
    console.log(Productos);
    res.json(Productos);

})

app.get('/productoRandom', async(req, res) => {
    await productos.getAll();
    let producto = {};
    const productoRandom = Math.floor(Math.random() * Productos.length);
    producto = Productos[productoRandom];
    res.json(producto);

})

app.listen(puerto, (error) => {
    if (!error) {
        console.log(`Servidor escuchando el puerto ${puerto}`);
    } else {
        console.log('Error al iniciar el servidor');
    }
})
const { Socket } = require('dgram')
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const { Server: IOServer } = require('socket.io')
const expressServer = app.listen(8080, () => { console.log('Servidor conectado pueto 8080') })
const io = new IOServer(expressServer)

const database = require('./database')

const createTable = async() => {
    try {
        await database.dbConnectionmySQL.schema.dropTableIfExists('productos')
        await database.dbConnectionmySQL.schema.hasTable('productos').then(function(exists) {
            if (!exists) {
                console.log("voy a crear tabla")
                return database.dbConnectionmySQL.schema.createTable('productos', function(t) {
                    t.increments('id').primary();
                    t.string('title', 100).notNullable();
                    t.integer('price').notNullable();
                    t.string('thumbnail', 100).notNullable();
                });
            } else {
                console.log("la tabla ya existe")

            }
        });
        // database.dbConnectionmySQL.destroy()
    } catch (err) {

        console.log(err)
        database.dbConnectionmySQL.destroy()

    }
}

createTable()


const createTableMessage = async() => {
    try {
        await database.dbConnectionSQL3.schema.dropTableIfExists('mensajes')
        await database.dbConnectionSQL3.schema.hasTable('mensajes').then(function(exists) {
            if (!exists) {
                console.log("voy a crear tabla mensajes")
                return database.dbConnectionSQL3.schema.createTable('mensajes', function(t) {
                    t.increments('id').primary();
                    t.string('email', 100).notNullable();
                    t.string('horaenvio').notNullable();
                    t.string('message', 100).notNullable();
                });
            } else {
                console.log("la tabla ya existe")

            }
        });
        // database.dbConnectionSQL3.destroy()
    } catch (err) {

        console.log(err)
        database.dbConnectionmySQL.destroy()

    }
}
createTableMessage()


const saveMessage = async(Objeto) => {
    console.log("LLEGUE")
    try {
        const InsertMessage = await database.dbConnectionSQL3('mensajes').insert(Objeto, 'id')
        console.log("El id del mensaje insertado es: ", `${ InsertMessage[0]}`);

    } catch (err) {
        console.log(err)
        database.dbConnectionSQL3.destroy()
    }
}

const save = async(Objeto) => {
    console.log("LLEGUE")
    try {
        const InsertProduct = await database.dbConnectionmySQL('productos').insert(Objeto, 'id')
        console.log("El id del producto insertado es: ", `${ InsertProduct[0]}`);


    } catch (err) {

        console.log(err)
        database.dbConnectionmySQL.destroy()
    }
}

const getAll = async() => {
    console.log("Mostrar Todos")
    try {
        const AllProduct = await database.dbConnectionmySQL.from('productos').select('id', 'title', 'price', 'thumbnail')
        console.log("Los productos disponibles son:", AllProduct);
        return AllProduct

    } catch (err) {
        console.log(err)
        database.dbConnectionmySQL.destroy()
    }
}

const getAllMessage = async() => {
    console.log("Mostrar Todos los mensajes")
    try {
        const AllMessage = await database.dbConnectionSQL3.from('mensajes').select('id', 'email', 'horaenvio', 'message')
        return AllMessage

    } catch (err) {
        console.log(err)
        database.dbConnectionSQL3.destroy()
    }
}


let productos = []
let messagesArray = [];

app.use(express.static(path.join(__dirname, '../public')))


io.on('connection', socket => {
    console.log(`Nuevo usuario conectado  ${socket.id} `)
    socket.on('client:product', async productInfo => {
        await save(productInfo)
        productos = await getAll()
        io.emit('server:productos', productos)
    })
    socket.emit('server:productos', productos)

    socket.on('client:menssage', async messageInfo => {
        await saveMessage(messageInfo)
        messagesArray = await getAllMessage()
        io.emit('server:mensajes', messagesArray)
            // console.log(messagesArray)

        //     io.emit('server:mensajes', messagesArray)
    })
    socket.emit('server:mensajes', messagesArray)
})
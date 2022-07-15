const knex = require('knex')

const config = {
    client: 'sqlite3',
    connection: { filename: './mydb.sqlite', },
    useNullAsDefault: true
}

const databaseConnection = knex(config)
    // const fs = require('fs')
    // const { Console } = require('console')




class Contenedor {
    constructor() {

    }

    async createTable() {
        try {
            // await databaseConnection.schema.dropTableIfExists('producto')
            await databaseConnection.schema.hasTable('producto').then(function(exists) {
                if (!exists) {
                    console.log("voy a crear tabla")
                    return databaseConnection.schema.createTable('producto', function(t) {
                        t.increments('id').primary();
                        t.string('title', 100).notNullable();
                        t.integer('price').notNullable();
                        t.string('thumbnail', 100).notNullable();
                    });
                } else {
                    console.log("la tabla ya existe")

                }
            });
            databaseConnection.destroy()
        } catch (err) {

            console.log(err)
            databaseConnection.destroy()

        }
    }

    async save(Objeto) {
        console.log("LLEGUE")
        try {
            const InsertProduct = await databaseConnection('producto').insert(Objeto, 'id')
            console.log("El id del producto insertado es: ", `${ InsertProduct[0]}`);
            databaseConnection.destroy()

        } catch (err) {

            console.log(err)
            databaseConnection.destroy()
        }
    }

    async getAll() {
        console.log("Mostrar Todos")
        try {
            const AllProduct = await databaseConnection.from('producto').select('id', 'title', 'price', 'thumbnail')
            console.log("Los productos disponibles son:", AllProduct);
            databaseConnection.destroy()
        } catch (err) {
            console.log(err)
            databaseConnection.destroy()
        }
    }



    async deleteProduct(IdDelete) {
        try {
            const resultDelete = await databaseConnection
                .from('producto').where({ id: `${IdDelete}` }, )
                .del()
            databaseConnection.destroy()
            if (resultDelete == 0) {
                console.log(`Id no encontrado en base de datos`)

            } else {
                console.log(`El id ${IdDelete} fue eliminado correctamente`)
            }
        } catch (err) {
            console.log(err)
        }
    }

    async deleteall() {
        try {
            const resultDeleteAll = await databaseConnection
                .from('producto').truncate()
            databaseConnection.destroy()
            console.log(resultDeleteAll)

            console.log(`Los registros fueron eliminados correctamente`)
        } catch (err) {
            console.log(err)
            databaseConnection.destroy()
        }
    }
}



const contenedor = new Contenedor()

/* IMPLEMENTACION SAVE(OBJECT)*/
contenedor.createTable()

/* IMPLEMENTACION SAVE(OBJECT) PARA INSERTAR PRODUCTO* /
// contenedor.save({ title: "laptop", price: "10,100", thumbnail: "img-laptop" })

/* IMPLEMENTACION METODO GET ALL PARA MOSTRAR TODO*/
// contenedor.getAll()

/* IMPLEMENTACION METODO DELETE PARA ELIMINAR PRODUCTO*/
// contenedor.deleteProduct(5)

/* IMPLEMENTACION DELETE ALL PARA BORRAR REGISTROS*/
// contenedor.deleteall()
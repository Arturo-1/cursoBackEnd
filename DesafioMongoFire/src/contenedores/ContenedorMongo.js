import mongoose from 'mongoose'
import StringMongoConfig from '../config.js'
await mongoose.connect(StringMongoConfig);
console.log("conexion establecida mongo")
class ContenedorMongo {
    constructor(collection, schema) {
        //this.Productos = mongoose.model(collection, new mongoose.Schema(schema));
        this.Carritos = mongoose.model(collection, new mongoose.Schema(schema));
    }

    /*  async ReadProductos() {
         try {
             const DatosProductos = await this.Productos.find()
             console.log('ProductosRead', DatosProductos)
 
         } catch (err) {
             console.log(err)
         }
     }
     async ReadProductosbyID(id) {
         try {
             const DatosProductos = await this.Productos.find({ _id: id })
             console.log('ProductosById', DatosProductos)
 
         } catch (err) {
             console.log(err)
         }
     }
     async saveProducts(datosproducto) {
         try {
             await this.Productos.insertMany(datosproducto)
             console.log("Producto insertado")
 
         } catch (err) {
             console.log(err)
         }
     }
     async delProducts(id) {
         try {
             await this.Productos.deleteOne({ _id: id })
             console.log("Producto Eliminado")
 
         } catch (err) {
             console.log(err)
         }
     }
 
     async UpdateProducts(id) {
         try {
             await this.Productos.updateOne({ _id: id }, { $set: { title: "cacahuate" } })
             console.log("Producto Actualizado")
 
         } catch (err) {
             console.log(err)
         }
     }
  */
    //Empieza seccion carrito

    async ReadCarrito() {
        try {
            const DatosCarrito = await this.Carritos.find()
            console.log('CarritoRead', DatosCarrito)

        } catch (err) {
            console.log(err)
        }
    }
    async InsertCarrito(datosCarrito) {
        try {
            await this.Carritos.insertMany(datosCarrito)
            console.log('Se inserto carrito')

        } catch (err) {
            console.log(err)
        }
    }

    async InsertProductoCarrito(idcarrito, datosCarrito) {
        try {
            let arrayProdutos = await this.Carritos.find({ _id: idcarrito }, { _id: 0, productos: 1 })
            arrayProdutos.push(datosCarrito)
            await this.Carritos.updateMany({ _id: idcarrito }, { $set: { productos: arrayProdutos } })
            console.log('Se agrego un producto al carrito:', idcarrito)

        } catch (err) {
            console.log(err)
        }
    }
}

export default ContenedorMongo;
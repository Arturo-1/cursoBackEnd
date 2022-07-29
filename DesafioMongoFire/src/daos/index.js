//import CarritosDaoFirebase from "./carritos/CarritosDaoFirebase";
//import CarritosDaoMongo from "./carritos/CarritosDaoMongo";
//import ProductosDaoFirebase from "./productos/ProductosDaoFirebase";
const { default: ProductosDaoMongo } = await import("./productos/ProductosDaoMongo.js");
let ProductDao = new ProductosDaoMongo();
const { default: CarritosDaoMongo } = await import("./carritos/CarritosDaoMongo.js");
let CarritoDao = new CarritosDaoMongo();


const main = async () => {
    /* Funciones productos
    await ProductDao.ReadProductos()
    await ProductDao.ReadProductosbyID("62e33b30660e1d2335d779a2")
    let DatoInsert = [{ "title": "Producto3", "price": "10.90", "thumbnail": "foto descript" }]
    await ProductDao.saveProducts(DatoInsert)
    await ProductDao.delProducts("62e33b30660e1d2335d779a2")
    await ProductDao.UpdateProducts("62e342271e2e8194de3f9a19")*/

    /*Funciones carrito*/
    await CarritoDao.ReadCarrito()
    let DatoInsert = [{ timestamp: "08/06/2022", productos: [] }]
    await CarritoDao.InsertCarrito(DatoInsert)
    let DatoInsertProductos = [{ "id": "62e34284d3e8d1f41de9e627", "timestamp": "07/06/2022", "nombre": "Producto1", "descripcion": "descProducto1", "codigo": "111111", "foto": "Foto1", "precio": "10.10", "cantidad": "1" }]

    await CarritoDao.InsertProductoCarrito("62e34bd7ea4647c32ca12674", DatoInsertProductos)


    /*await ProductDao.ReadProductosbyID("62e33b30660e1d2335d779a2")
    let DatoInsert = [{ "title": "Producto3", "price": "10.90", "thumbnail": "foto descript" }]
    await ProductDao.saveProducts(DatoInsert)
    await ProductDao.delProducts("62e33b30660e1d2335d779a2")
    await ProductDao.UpdateProducts("62e342271e2e8194de3f9a19")*/


}

main()


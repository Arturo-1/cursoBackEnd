import dotenv from "dotenv";
dotenv.config();

let ProductoDao;
let CarritoDao;

switch (process.env.DATABASE.toUpperCase()) {

  case "FIREBASE":
    const { default: ProductoDaoFirebase } = await import(
      "./productos/ProductoDaoFirebase.js"
    );
    const { default: CarritoDaoFirebase } = await import(
      "./carritos/CarritoDaoFirebase.js"
    );

    ProductoDao = new ProductoDaoFirebase();
    CarritoDao = new CarritoDaoFirebase();

    break;

  case "MONGO":
    const { default: ProductoDaoMongo } = await import(
      "./productos/ProductoDaoMongo.js"
    );
    const { default: CarritoDaoMongo } = await import(
      "./carritos/CarritoDaoMongo.js"
    );

    ProductoDao = new ProductoDaoMongo();
    CarritoDao = new CarritoDaoMongo();

    break;

  case 'FS':
    const { default: ContenedorFS } = await import("../contenedores/ContenedorFS.js")
    ProductoDao = new ContenedorFS("./src/other-dbs/fs-db/products.json", "./src/other-dbs/fs-db/productIds.json", "./src/other-dbs/fs-db/deletedProducts.json", "producto");
    CarritoDao = new ContenedorFS("./src/other-dbs/fs-db/carts.json", "./src/other-dbs/fs-db/cartIds.json", "./src/other-dbs/fs-db/deletedCarts.json", "carrito");
    ProductoDao.init("Productos")
    CarritoDao.init("Carritos")

    break;
}

export { ProductoDao, CarritoDao };
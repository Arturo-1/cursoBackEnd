import ContenedorMongo from "../../contenedores/ContenedorMongo.js";

class ProductosDaoMongo extends ContenedorMongo {
    constructor() {
        super("productos", {
            title: { type: String },
            price: { type: Number },
            thumbnail: { type: String }
        });
    }

}
export default ProductosDaoMongo;
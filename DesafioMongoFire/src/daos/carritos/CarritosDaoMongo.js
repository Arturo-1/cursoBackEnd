import ContenedorMongo from "../../contenedores/ContenedorMongo.js";

class CarritosDaoMongo extends ContenedorMongo {
    constructor() {
        super("carrito", {
            timestamp: { type: Date },
            productos: { type: Array }
        })

    }
}

export default CarritosDaoMongo
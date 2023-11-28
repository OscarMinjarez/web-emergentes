class Producto{
    constructor(id, nombreProducto, ingredientes, idOrden, idAdministrador) {
        this.id = id;
        this.nombreProducto=nombreProducto;
        this.ingredientes = ingredientes;
        this.idOrden=idOrden;
        this.idAdministrador=idAdministrador;
    }
}
   module.exports = Producto;
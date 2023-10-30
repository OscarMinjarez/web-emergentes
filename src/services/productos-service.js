const dataSource = require("../libs/bd");
const Producto = require("../models/producto");

class ProductosService{
    constructor(){
        this.productoRepository = dataSource.getRepository("Producto");
      }

      async obtenerPorIdProductos(id) {
        return await this.productoRepository.findOne({
            where: { id }
        });
    }
    async obtenerTodosProductos() {
        return await this.productoRepository.find({
            select: ["id", "nombreProducto"]
        });
    }
    async crearProductos(producto) {
        if (!producto) {
            throw Error("No se puede agregar un producto");
        }
        if (!producto.nombreProducto) {
            throw Error("No se puede crear un producto sin un nombre");
        }

        const nuevoProducto = new Producto();
        Object.assign(nuevoProducto, producto);

        return await this.productoRepository.save(nuevoProducto);
    }
    async actualizarProductos(id, nuevoProducto) {
        const productoGuardado = await this.obtenerPorIdProductos(id);

        if (!productoGuardado) {
            throw Error("No existe el producto a actualizar");
        }

        Object.assign(productoGuardado, nuevoProducto);

        return await this.productoRepository.save(productoGuardado);
    }
    async eliminarProductos(id) {
        const productoGuardado = await this.obtenerPorIdProductos(id);

        if (!productoGuardado) {
            throw Error("No existe el producto a eliminar");
        }

        return await this.productoRepository.remove(productoGuardado);
    }

}
module.exports= ProductosService;
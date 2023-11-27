const ProductosService = require("../services/productos-service");

class ProductosController{
    constructor() {
        this.productosService = new ProductosService();
      }
      async obtenerPorId(req, res) {
        try {
            const id = req.params.id;
            const producto = await this.productosService.obtenerPorIdProductos(id);
            res.status(200).json(producto);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
       }
       async obtenerTodos(req, res) {
        try {
            const productos = await this.productosService.obtenerTodosProductos();
            res.status(200).json(productos);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
       }
       async crear(req, res) {
        try {
            const producto = req.body;
            const nuevoProducto = this.productosService.crearProductos(producto);
            res.status(201).json(nuevoProducto);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
      }
      async actualizar(req, res) {
        try {
            const id = req.params.id;
            const productoActualizado = this.productosService.actualizarProductos(id, req.body);
            res.status(201).json(productoActualizado);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    async eliminar(req, res) {
        try {
            const id = req.params.id;
            const productoEliminado = this.productosService.eliminarProductos(id);
            res.status(201).json(productoEliminado);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
      }

}
module.exports=ProductosController;
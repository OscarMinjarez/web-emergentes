const CocineroService = require("../services/cocineros-service");

class CocinerosController {
    constructor() {
        this.cocinerosService = new CocineroService();
    }
  async obtenerPorId(req, res) {
        try {
            const id = req.params.id;
            const cocinero = await this.cocinerosService.obtenerPorId(id);
            res.status(200).json(cocinero);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
  async obtenerTodos(req, res) {
        try {
            const cocineros = await this.cocinerosService.obtenerTodos();
            res.status(200).json(cocineros);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
  async crear(req, res) {
        try {
            const cocinero = req.body;
            const nuevoCocinero = this.cocinerosService.crear(cocinero);
            res.status(201).json(nuevoCocinero);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    async actualizar(req, res) {
        try {
            const id = req.params.id;
            const cocineroActualizado = this.cocinerosService.actualizar(id, req.body);
            res.status(201).json(cocineroActualizado);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
  async eliminar(req, res) {
        try {
            const id = req.params.id;
            const cocineroEliminado = this.cocinerosService.eliminar(id);
            res.status(201).json(cocineroEliminado);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
module.exports = CocinerosController;

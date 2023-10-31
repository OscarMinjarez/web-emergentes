const SuperUsuariosService = require("../services/super_usuarios-service");

class SuperUsuariosController {
    constructor() {
        this.superUsuariosService = new SuperUsuariosService();
    }

    async obtenerPorId(req, res) {
        try {
            const id = req.params.id;
            const superUsuario = await this.superUsuariosService.obtenerPorId(id);
            res.status(200).json(superUsuario);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async obtenerTodos(req, res) {
        try {
            const superUsuarios = await this.superUsuariosService.obtenerTodos();
            res.status(200).json(superUsuarios);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async crear(req, res) {
        try {
            const superUsuario = req.body;
            const nuevoSuperUsuario = await this.superUsuariosService.crear(superUsuario);
            res.status(201).json(nuevoSuperUsuario);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    async actualizar(req, res) {
        try {
            const id = req.params.id;
            const nuevoSuperUsuario = req.body;
            const superUsuarioActualizado = await this.superUsuariosService.actualizar(id, nuevoSuperUsuario);
            res.status(200).json(superUsuarioActualizado);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    async eliminar(req, res) {
        try {
            const id = req.params.id;
            await this.superUsuariosService.eliminar(id);
            res.status(200).json({ message: "Super Usuario eliminado correctamente" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

module.exports = SuperUsuariosController;
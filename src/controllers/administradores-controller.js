const Administrador = require("../models/administrador");
const AdministradoresService = require("../services/administradores-service");

class AdministradoresController {
    constructor() {
        this.administradoresService = new AdministradoresService();
    }

    async obtenerPorIdAdministradores(req, res) {
        try {
            const id = req.params.id;
            const administrador = await this.administradoresService.obtenerPorIdAdministradores(id);
            res.status(200).json(administrador);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async obtenerTodos(req, res) {
        try {
            const administradores = await this.administradoresService.obtenerTodosAdministradores();
            res.status(200).json(administradores);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async crearAdministradores(req, res) {
        try {
            const administrador = req.body;
            const nuevoAdministrador = this.administradoresService.crearAdministradores(administrador);
            res.status(201).json(nuevoAdministrador);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    
    async actualizarAdministradores(req, res) {
        try {
            const id = req.params.id;
            const administradorActualizado = this.administradoresService.actualizarAdministrdores(id, req.body);
            res.status(201).json(administradorActualizado);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    async eliminarAdministradores(req, res) {
        try {
            const id = req.params.id;
            const administradorEliminado = this.administradoresService.eliminarAdministradores(id);
            res.status(201).json(administradorEliminado);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async autenticarAdministrador(req, res) {
        try {
            const { nombreUsuario, contrasenia } = req.body;
            const administrador = new Administrador();
            administrador.nombreUsuario = nombreUsuario;
            administrador.contrasenia = contrasenia;
            const administradorAutenticado = await this.administradoresService.autenticarAdministrador(administrador);
            if (!administradorAutenticado) {
                return res.status(401).json({
                    message: "No fue posible autenticare"
                });
            }
            const tokenDeAcceso = await TokenManager.generarTokenDeAcceso(administradorAutenticado.contrasenia);
            TokenManager.establecerCookie(res, tokenDeAcceso);
            return res.json({ usuario: administradorAutenticado, tokenDeAcceso });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

module.exports = AdministradoresController;

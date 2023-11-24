const path = require("path");

class VistaController {
    constructor() {
    }

    async paginaHome(req, res) {
        const usuario = req.usuario;
        if (!usuario.puesto) {
            return res.sendFile(path.join(__dirname, "../pages", "home-super-usuario.html"));
        }
        switch (usuario.puesto.toLowerCase()) {
            case "administrador":
                return res.sendFile(path.join(__dirname, "../pages", "home-administrador.html"));
            case "cocinero":
                return res.sendFile(path.join(__dirname, "../pages", "home-cocinero.html"));
            case "mesero":
                return res.sendFile(path.join(__dirname, "../pages", "home-mesero.html"));
            default:
                return res.sendFile(path.join(__dirname, "../pages", "home-super-usuario.html"));
        }
    }

    async paginaLogin(req, res) {
        return await res.sendFile(path.join(__dirname, "../pages", "login.html"));
    }
}

module.exports = VistaController;
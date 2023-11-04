require("dotenv").config();
const jwt = require("jsonwebtoken");

class TokenManager {
    static async generarTokenDeAcceso(contrasenia) {
        return jwt.sign({ contrasenia }, process.env.SECRET, { expiresIn: '5m' });
    }

    static async validarToken(req, res, next) {
        const tokenDeAcceso = req.headers["authorization"];

        if (!tokenDeAcceso) {
            return res.send("Acceso denegado");
        }

        jwt.verify(tokenDeAcceso, process.env.SECRET, (err, usuario) => {
            if (err) {
                return res.status(401).json({ error: "Acceso denegado, el token expiró o es incorrecto" });
            } else {
                next();
            }
        });
    }
}

module.exports = TokenManager;
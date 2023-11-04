const dataSource = require("../libs/bd");
const Administrador = require("../models/administrador");

class AdministradoresService{
    constructor() {
        this.administradorRepository = dataSource.getRepository("Administrador");
    }

      async obtenerPorIdAdministradores(id) {
        return await this.administradorRepository.findOne({
            where: { id }
        });
    }

    async obtenerTodosAdministradores() {
        return await this.administradorRepository.find({
            select: ["id", "nombreUsuario", "contrasenia"]
        });
    }

    async crearAdministradores(administrador) {
        if (!administrador) {
            throw Error("No se puede agregar un administrador");
        }
        if (!administrador.nombreUsuario) {
            throw Error("No se puede crear un administrador sin un nombre");
        }

        if (!administrador.contrasenia) {
            throw Error("No se puede crear un administrador sin una contraseña");
        }

        const nuevoAdministrador = new Administrador();
        Object.assign(nuevoAdministrador, administrador);

        return await this.administradorRepository.save(nuevoAdministrador);
    }

    async actualizarAdministrdores(id, nuevoAdministrador) {
        const administradorGuardado = await this.obtenerPorIdAdministradores(id);

        if (!administradorGuardado) {
            throw Error("No existe el administrador a actualizar");
        }

        Object.assign(administradorGuardado, nuevoAdministrador);

        return await this.administradorRepository.save(administradorGuardado);
    }

    async eliminarAdministradores(id) {
        const administradorGuardado = await this.obtenerPorIdAdministradores(id);

        if (!administradorGuardado) {
            throw Error("No existe el administrador a eliminar");
        }

        return await this.administradorRepository.remove(administradorGuardado);
    }
}

module.exports= AdministradoresService;

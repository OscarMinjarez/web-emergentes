const dataSource = require("../libs/bd");
const Cocinero = require("../models/cocinero");

class CocineroService{
  constructor(){
    this.cocineroRepository = dataSource.getRepository("Cocinero");
  }
  async obtenerPorId(id) {
        return await this.cocineroRepository.findOne({
            where: { id }
        });
    }
  async obtenerTodos() {
        return await this.cocineroRepository.find({
            select: ["id", "nombreUsuario", "cantidad"]
        });
    }
   async crear(cocinero) {
        if (!cocinero) {
            throw Error("No se puede agregar un cocinero");
        }
        if (!cocinero.nombreUsuario) {
            throw Error("No se puede crear un cocinero sin un nombre");
        }

        if (!cocinero.contrasenia) {
            throw Error("No se puede crear un cocinero sin una contraseña");
        }

        const nuevoCocinero = new Cocinero();
        Object.assign(nuevoCocinero, cocinero);

        return await this.cocineroRepository.save(nuevoCocinero);
    }
   async actualizar(id, nuevoCocinero) {
        const cocineroGuardado = await this.obtenerPorId(id);

        if (!cocineroGuardado) {
            throw Error("No existe el cocinero a actualizar");
        }

        Object.assign(cocineroGuardado, nuevoCocinero);

        return await this.cocineroRepository.save(cocineroGuardado);
    }
  async eliminar(id) {
        const cocineroGuardado = await this.obtenerPorId(id);

        if (!cocineroGuardadi) {
            throw Error("No existe el cocinero a eliminar");
        }

        return await this.cocineroRepository.remove(cocineroGuardado);
    }
}
module.exports = CocinerosService;

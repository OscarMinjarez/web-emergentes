// Importa las clases EntityRepository y Repository desde TypeORM.
const { EntityRepository, Repository } = require('typeorm');

// Importa la clase Administrador desde el archivo Administrador.
const Administrador = require('./Administrador');

// Crea un repositorio de entidades para la clase Administrador.
@EntityRepository(Administrador)
class AdministradorCrud extends Repository {

    // Crea un nuevo administrador
    async create(administrador) {
        return await this.save(administrador);
    }

    // Obtiene un administrador por el id
    async read(id) {
        return await this.findOne(id);
    }

    // Actualiza un administrador
    async update(administrador) {
        return await this.save(administrador);
    }

    // Eliminar un administrador por el id
    async delete(id) {
        await this.delete(id);
    }
}

// Exporta la clase AdministradorCrud.
module.exports = AdministradorCrud;

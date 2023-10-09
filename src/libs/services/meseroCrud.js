// Importa las clases EntityRepository y Repository desde TypeORM.
const { EntityRepository, Repository } = require('typeorm');

// Importa la clase Mesero desde el archivo Mesero.
const Mesero = require('./Mesero');

// Crea un repositorio de entidades para la clase Mesero.
@EntityRepository(Mesero)
class MeseroRepository extends Repository {

    // Crea un nuevo mesero
    async create(mesero) {
        return await this.save(mesero);
    }

    // Obtiene un mesero por el id
    async read(id) {
        return await this.findOne(id);
    }

    // Actualiza un mesero
    async update(mesero) {
        return await this.save(mesero);
    }

    // Elimina un mesero por el id
    async delete(id) {
        await this.delete(id);
    }
}

// Exporta la clase MeseroRepository.
module.exports = MeseroRepository;

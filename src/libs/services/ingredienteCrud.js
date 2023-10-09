// Importa las clases EntityRepository y Repository desde TypeORM.
const { EntityRepository, Repository } = require('typeorm');

// Importa la clase Ingrediente desde el archivo Ingrediente.
const Ingrediente = require('./Ingrediente');

// Crea un repositorio de entidades para la clase Ingrediente.
@EntityRepository(Ingrediente)
class IngredienteRepository extends Repository {

    // Crea un nuevo ingrediente.
    async create(ingrediente) {
        return await this.save(ingrediente);
    }

    // Obtiene un ingrediente por el id
    async read(id) {
        return await this.findOne(id);
    }

    // Actualiza un ingrediente
    async update(ingrediente) {
        return await this.save(ingrediente);
    }

    // Elimina un ingrediente por el id
    async delete(id) {
        await this.delete(id);
    }

    // Método adicional para obtener todos los ingredientes de un producto

    async getIngredientesByProducto(idProducto) {
        return await this.find({ producto: { id: idProducto } });
    }
}

// Exportar la clase IngredienteRepository.
module.exports = IngredienteRepository;
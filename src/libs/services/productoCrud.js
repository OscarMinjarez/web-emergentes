// Importa las clases EntityRepository y Repository desde TypeORM.
const { EntityRepository, Repository } = require('typeorm');

// Importa la clase Producto desde el archivo Producto.
const Producto = require('./Producto');

// Crea un repositorio de entidades para la clase Producto.
@EntityRepository(Producto)
class ProductoRepository extends Repository {

   //Crea un nuevo producto
    async create(producto) {
        return await this.save(producto);
    }

    // Obtiene un producto por el id
    async read(id) {
        return await this.findOne(id);
    }

    // Actualiza un producto
    async update(producto) {
        return await this.save(producto);
    }

    // Elimina un producto por el id.
    async delete(id) {
        await this.delete(id);
    }
}

// Exporta la clase ProductoRepository.
module.exports = ProductoRepository;
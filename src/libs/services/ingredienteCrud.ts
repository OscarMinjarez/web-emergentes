import { EntityRepository, Repository } from "typeorm";
import { Ingrediente } from "./Ingrediente";

@EntityRepository(Ingrediente)
export class IngredienteRepository extends Repository<Ingrediente> {

    async create(ingrediente: Ingrediente): Promise<Ingrediente> {
        return await this.save(ingrediente);
    }

    async read(id: number): Promise<Ingrediente | undefined> {
        return await this.findOne(id);
    }

    async update(ingrediente: Ingrediente): Promise<Ingrediente> {
        return await this.save(ingrediente);
    }

    async delete(id: number): Promise<void> {
        await this.delete(id);
    }

    // Método adicional para obtener todos los ingredientes de un producto

    async getIngredientesByProducto(idProducto: number): Promise<Ingrediente[]> {
        return await this.find({ producto: { id: idProducto } });
    }
}
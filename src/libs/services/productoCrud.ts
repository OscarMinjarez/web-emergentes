import { EntityRepository, Repository } from "typeorm";
import { Producto } from "./Producto";

@EntityRepository(Producto)
export class ProductoRepository extends Repository<Producto> {

    async create(producto: Producto): Promise<Producto> {
        return await this.save(producto);
    }

    async read(id: number): Promise<Producto | undefined> {
        return await this.findOne(id);
    }

    async update(producto: Producto): Promise<Producto> {
        return await this.save(producto);
    }

    async delete(id: number): Promise<void> {
        await this.delete(id);
    }

}
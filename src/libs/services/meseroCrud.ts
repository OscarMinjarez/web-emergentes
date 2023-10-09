import { EntityRepository, Repository } from "typeorm";
import { Mesero } from "./Mesero";

@EntityRepository(Mesero)
export class MeseroRepository extends Repository<Mesero> {

    async create(mesero: Mesero): Promise<Mesero> {
        return await this.save(mesero);
    }

    async read(id: number): Promise<Mesero | undefined> {
        return await this.findOne(id);
    }

    async update(mesero: Mesero): Promise<Mesero> {
        return await this.save(mesero);
    }

    async delete(id: number): Promise<void> {
        await this.delete(id);
    }

}
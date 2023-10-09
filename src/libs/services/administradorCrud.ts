import { EntityRepository, Repository } from "typeorm";
import { Administrador } from "/Administrador";

@EntityRepository(Administrador)
export class administradorCrud extends repository<Administrador> {

    async create(administrador: Administrador): Promise<Administrador> {
        return await this.save(administrador);
    }

    async read(id: number): Promise<Administrador | undefined> {
        return await this.findOne(id);
    }

    async update(administrador: Administrador): Promise<Administrador> {
        return await this.save(administrador);
    }

    async delete(id: number): Promise<void> {
        await this.delete(id);
    }
}
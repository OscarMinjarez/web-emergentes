const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Mesero",
    tableName: "meseros",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        nombreUsuario: {
            type: "varchar",
            length: 30,
            nullable: false
        },
        puesto: {
            type: "varchar",
            length: 20,
            nullable: false
        },
        contrasenia: {
            type: "varchar",
            length: 50,
            nullable: false
        }
    },
    relations: {
        ordenes: {
            type: "one-to-many",
            target: "Orden",
            inverseSide: "mesero"
        },
        superUsuario: {
            type: "many-to-one",
            target: "SuperUsuario"
        }
    }
});
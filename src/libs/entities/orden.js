const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Orden",
    tableName: "ordenes",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        numeroOrden: {
            type: "int",
            nullable: false
        }
    },
    relations: {
        productos: {
            type: "one-to-many",
            target: "Producto",
            inverseSide: "orden"
        },
        mesero: {
            type: "many-to-one",
            target: "Mesero"
        },
        cocinero: {
            type: "many-to-one",
            target: "Cocinero"
        }
    }
});
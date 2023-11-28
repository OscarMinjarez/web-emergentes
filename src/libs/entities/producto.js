const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Producto",
    tableName: "productos",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        nombreProducto: {
            type: "varchar",
            length: 50,
            nullable: false
        }
    },
    relations: {
        ingredientes: {
            type: "many-to-many",
            target: "Ingrediente",
            joinTable: {
                name: "producto_ingredientes",
                joinColumn: {
                    name: "productoId",
                    referencedColumnName: "id"
                },
                inverseJoinColumn: {
                    name: "ingredienteId",
                    referencedColumnName: "id"
                }
            }
        },
        orden: {
            type: "many-to-one",
            target: "Orden"
        },
        administrador: {
            type: "many-to-one",
            target: "Administrador"
        }
    }
});

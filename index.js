const express = require("express");
const dataSource = require("./src/libs/bd");

const app = express();

app.get("/", (req, res) => {
    res.send("Servidor de express funcionando");
});

dataSource.initialize().then(() => {
    console.log("Conectado a la base de datos");

    app.listen(3000, () => {
        console.log("Server funcionando en el puerto 3000");
    });
}).catch((err) => {
    console.log(err);
});

const express = require("express");
const dataSource = require("./src/libs/bd");

const routes = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("Server funcionando en el puerto 3000");
});

dataSource.initialize().then(() => {
    console.log("Conectado a la base de datos");

    
}).catch((err) => {
    console.log(err);
});

const { Router } = require("express");
const IngredientesController = require("../controllers/ingredientes-controller");
const MeserosController = require("../controllers/meseros-controller");

const router = new Router();
const ingredientesController = new IngredientesController();
const meserosController = new MeserosController();

router.get("/", (req, res) => res.send("Hello World"));

//Direccionamiento para entidad Ingredientes
router.get("/ingredientes/:id", async (req, res) => {
    await ingredientesController.obtenerPorId(req, res);
});

router.get("/ingredientes", async (req, res) => {
    await ingredientesController.obtenerTodos(req, res);
});

router.post("/ingredientes", async (req, res) => {
    await ingredientesController.crear(req, res);
});

router.patch("/ingredientes/:id", async (req, res) => {
    await ingredientesController.actualizar(req, res);
});

router.delete("/ingredientes/:id", async (req, res) => {
    await ingredientesController.eliminar(req, res);
});
//Direccionamiento para la entidad mesero
//Obtener todos los meseros por id
router.get("/meseros/:id", async (req, res) => {
    await meserosController.obtenerPorId(req, res);
});
//Obtener todos los meseros
router.get("/meseros", async (req, res) => {
    await meserosController.obtenerTodos(req, res);
});
//Crear un mesero
router.post("/meseros", async (req, res) => {
    await meserosController.crear(req, res);
});
//Actualizar un mesero
router.patch("/meseros/:id", async (req, res) => {
    await meserosController.actualizar(req, res);
});
//Eliminar un mesero
router.delete("/meseros/:id", async (req, res) => {
    await meserosController.eliminar(req, res);
});
module.exports = router;

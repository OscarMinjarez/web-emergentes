const { Router } = require("express");
const IngredientesController = require("../controllers/ingredientes-controller");
const MeserosController = require("../controllers/meseros-controller");
const CocinerosController = require("../controllers/cocineros-controller")

const router = new Router();
const ingredientesController = new IngredientesController();
const meserosController = new MeserosController();
const cocinerosController = new CocinerosController();

router.get("/", (req, res) => res.send("Hello World"));

//Direccionamiento para entidad Ingredientes
// TODO: Agregar middleware de autenticación

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

//Direccionamiento entidad cocinero
//Obtener todos los cocineros por id
router.get("/cocineros/:id", async (req, res) => {
    await cocinerosController.obtenerPorId(req, res);
});

//Obtener todos los cocineros
router.get("/cocineros", async (req, res) => {
    await cocinerosController.obtenerTodos(req, res);
});

//Crear un cocinero
router.post("/cocineros", async (req, res) => {
    await cocinerosController.crear(req, res);
});

//Actualizar un cocinero
router.patch("/cocineros/:id", async (req, res) => {
    await cocinerosController.actualizar(req, res);
});

//Eliminar un cocinero
router.delete("/cocineros/:id", async (req, res) => {
    await cocinerosController.eliminar(req, res);
});

module.exports = router;

const { Router } = require("express");
const IngredientesController = require("../controllers/ingredientes-controller");

const router = new Router();
const ingredientesController = new IngredientesController();

router.get("/", (req, res) => res.send("Hello World"));

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

module.exports = router;
const { Router } = require("express");
const router = new Router();
//Importar ingredientes-controller
const IngredientesController = require("../controllers/ingredientes-controller");
const ingredientesController = new IngredientesController();
//Importar cocineros-controller
const CocinerosController = require("../controllers/cocineros-controller");
const cocinerosController = new CocinerosController();
//Importar meseros-controller
const MeserosController = require("../controllers/meseros-controller");
const meserosController = new MeserosController();
//Importar administradores-controller
const AdministradoresController = require("../controllers/administradores-controller");
const administradoresController = new AdministradoresController();
//Importar productos-controller
const ProductosController = require("../controllers/productos-controller");
const productosController = new ProductosController();
//Importar Ordenes-controller
const OrdenesController = require ("../controllers/ordenes-controller");
const ordenesController = new OrdenesController();
//Importar Super_usuariosController
const SuperUsuariosController = require("../controllers/super_usuarios-controller");
const superUsuariosController= new SuperUsuariosController();

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
//Direccionamiento entidad cocinero
//Obtener todos los cocineros por id
router.get("/cocineros/:id", async (req, res) => {
    await cocinerosController.obtenerPorIdCocineros(req, res);
});
//Obtener todos los cocineros
router.get("/cocineros", async (req, res) => {
    await cocinerosController.obtenerTodosCocineros(req, res);
});
//Crear un cocinero
router.post("/cocineros", async (req, res) => {
    await cocinerosController.crearCocineros(req, res);
});
//Actualizar un cocinero
router.patch("/cocineros/:id", async (req, res) => {
    await cocinerosController.actualizarCocineros(req, res);
});
//Eliminar un cocinero
router.delete("/cocineros/:id", async (req, res) => {
    await cocinerosController.eliminarCocineros(req, res);
});
//Direccionamiento entidad mesero
//Obtener todos los meseros por id
router.get("/meseros/:id", async (req, res) => {
    await meserosController.obtenerPorIdMeseros(req, res);
});
//Obtener todos los meseros
router.get("/meseros", async (req, res) => {
    await meserosController.obtenerTodosMeseros(req, res);
});
//Crear un mesero
router.post("/meseros", async (req, res) => {
    await meserosController.crearMesero(req, res);
});
//Actualizar un mesero
router.patch("/meseros/:id", async (req, res) => {
    await meserosController.actualizarMeseros(req, res);
});
//Eliminar un mesero
router.delete("/meseros/:id", async (req, res) => {
    await meserosController.eliminarMesero(req, res);
});
//Direccionamiento entidad administrador
//Obtener todos los administradores por id
router.get("/administradores/:id", async (req, res) => {
    await administradoresController.obtenerPorIdAdministradores(req, res);
});
//Obtener todos los administradores
router.get("/administradores", async (req, res) => {
    await administradoresController.obtenerTodosAdministradores(req, res);
});
//Crear un administrador
router.post("/administradores", async (req, res) => {
    await administradoresController.crearAdministradores(req, res);
});
//Actualizar un administrador
router.patch("/administradores/:id", async (req, res) => {
    await administradoresController.actualizarAdministradores(req, res);
});
//Eliminar un administrador
router.delete("/administradores/:id", async (req, res) => {
    await administradoresController.eliminarAdministradores(req, res);
});

//Direccionamiento entidad producto
//Obtener todos los productos por id
router.get("/productos/:id", async (req, res) => {
    await productosController.obtenerPorIdProductos(req, res);
});
//Obtener todos los productos
router.get("/productos", async (req, res) => {
    await productosController.obtenerTodosProductos(req, res);
});
//Crear un producto
router.post("/productos", async (req, res) => {
    await productosController.crearProductos(req, res);
});
//Actualizar un producto
router.patch("/productos/:id", async (req, res) => {
    await productosController.actualizarProductos(req, res);
});
//Eliminar un producto
router.delete("/productos/:id", async (req, res) => {
    await productosController.eliminarProductos(req, res);
});
module.exports = router;

// Obtener una orden por id
router.get("/ordenes/:id", async (req, res) => {
    await ordenesController.obtenerPorId(req, res);
});

// Obtener todas las ordenes
router.get("/ordenes", async (req, res) => {
    await ordenesController.obtenerTodos(req, res);
});

// Actualizar una orden
router.patch("/ordenes/:id", async (req, res) => {
    await ordenesController.actualizar(req, res);
});

// Eliminar una orden
router.delete("/ordenes/:id", async (req, res) => {
    await ordenesController.eliminar(req, res);
});

// Obtener un super usuario por id
router.get("/superusuarios/:id", async (req, res) => {
    await superUsuariosController.obtenerPorId(req, res);
});

// Obtener todos los super usuarios
router.get("/superusuarios", async (req, res) => {
    await superUsuariosController.obtenerTodos(req, res);
});

// Actualizar un super usuario
router.patch("/superusuarios/:id", async (req, res) => {
    await superUsuariosController.actualizar(req, res);
});

// Eliminar un super usuario
router.delete("/superusuarios/:id", async (req, res) => {
    await superUsuariosController.eliminar(req, res);
});
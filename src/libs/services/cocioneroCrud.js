const { getRepository } = require("typeorm");
const Cocinero = require("./Cocinero"); // Asegúrate de tener el archivo del esquema

const cocineroRepository = getRepository(Cocinero);

// Operación de Crear
async function crearCocinero(nuevoCocinero) {
  const cocinero = cocineroRepository.create(nuevoCocinero);
  await cocineroRepository.save(cocinero);
  return cocinero;
}

// Operación de Leer
async function obtenerCocineroPorId(id) {
  return await cocineroRepository.findOne(id);
}

// Operación de Actualizar
async function actualizarCocinero(id, nuevosDatos) {
  await cocineroRepository.update(id, nuevosDatos);
  return await cocineroRepository.findOne(id);
}

// Operación de Eliminar
async function eliminarCocinero(id) {
  const cocinero = await cocineroRepository.findOne(id);
  await cocineroRepository.delete(id);
  return cocinero;
}

module.exports = {
  crearCocinero,
  obtenerCocineroPorId,
  actualizarCocinero,
  eliminarCocinero
};
const { getRepository } = require("typeorm");
const Orden = require("./Orden"); // Asegúrate de tener el archivo del esquema

const ordenRepository = getRepository(Orden);

// Operación de Crear
async function crearOrden(nuevaOrden) {
  const orden = ordenRepository.create(nuevaOrden);
  await ordenRepository.save(orden);
  return orden;
}

// Operación de Leer
async function obtenerOrdenPorId(id) {
  return await ordenRepository.findOne(id);
}

// Operación de Actualizar
async function actualizarOrden(id, nuevosDatos) {
  await ordenRepository.update(id, nuevosDatos);
  return await ordenRepository.findOne(id);
}

// Operación de Eliminar
async function eliminarOrden(id) {
  const orden = await ordenRepository.findOne(id);
  await ordenRepository.delete(id);
  return orden;
}

module.exports = {
  crearOrden,
  obtenerOrdenPorId,
  actualizarOrden,
  eliminarOrden
};






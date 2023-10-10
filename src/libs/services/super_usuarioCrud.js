const { getRepository } = require("typeorm");
const SuperUsuario = require("./SuperUsuario"); // Asegúrate de tener el archivo del esquema

const superUsuarioRepository = getRepository(SuperUsuario);

// Operación de Crear
async function crearSuperUsuario(nuevoSuperUsuario) {
  const superUsuario = superUsuarioRepository.create(nuevoSuperUsuario);
  await superUsuarioRepository.save(superUsuario);
  return superUsuario;
}

// Operación de Leer
async function obtenerSuperUsuarioPorId(id) {
  return await superUsuarioRepository.findOne(id);
}

// Operación de Actualizar
async function actualizarSuperUsuario(id, nuevosDatos) {
  await superUsuarioRepository.update(id, nuevosDatos);
  return await superUsuarioRepository.findOne(id);
}

// Operación de Eliminar
async function eliminarSuperUsuario(id) {
  const superUsuario = await superUsuarioRepository.findOne(id);
  await superUsuarioRepository.delete(id);
  return superUsuario;
}

module.exports = {
  crearSuperUsuario,
  obtenerSuperUsuarioPorId,
  actualizarSuperUsuario,
  eliminarSuperUsuario
};
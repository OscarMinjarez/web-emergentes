console.log("Comenzando prueba de crearCocinero");

crearCocinero({ nombreUsuario: 'chef123', contrasenia: 'secreta123' })
  .then(cocinero => console.log('Cocinero creado:', cocinero))
  .catch(error => console.error('Error al crear el cocinero:', error));

console.log("Fin de prueba de crearCocinero");
/*
// Obtener un cocinero por su ID
obtenerCocineroPorId(1)
  .then(cocinero => console.log('Cocinero encontrado:', cocinero))
  .catch(error => console.error('Error al obtener el cocinero:', error));

// Actualizar un cocinero
actualizarCocinero(1, { nombreUsuario: 'nuevoChef' })
  .then(cocinero => console.log('Cocinero actualizado:', cocinero))
  .catch(error => console.error('Error al actualizar el cocinero:', error));

// Eliminar un cocinero
eliminarCocinero(1)
  .then(cocinero => console.log('Cocinero eliminado:', cocinero))
  .catch(error => console.error('Error al eliminar el cocinero:', error));*/
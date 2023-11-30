# Sonorasia

Este proyecto es una aplicación que permite la creación de una base de datos llamada "sonorasia" para el restaurante del mismo nombre.

El equipo está conformado por:

- Oscar Minjarez
- Adrián Lizárraga
- Alejandro Izaguirre

## Primeros Pasos

1. Después de obtener el repositorio, ejecutaremos el siguiente comando para instalar todas las dependencias del proyecto:

    ```bash
    npm install
    ```

2. Debe existir una base de datos llamada "sonorasia" en MySQL. Ejecute el siguiente query para crearla manualmente:

    ```sql
    DROP DATABASE IF EXISTS sonorasia;
    CREATE DATABASE sonorasia;
    ```

3. Después, ejecute el siguiente comando para iniciar la aplicación:

    ```bash
    npm start
    ```

    Además, deberá crear un super usuario para tener el control total de la aplicación:

    ```sql
    INSERT INTO sonorasia.super_usuarios (id, correo, nombreUsuario, contrasenia) VALUES ('1', 'admin@correo.com', 'admin', 'admin');
    ```

    Este comando realizará un chequeo de la base de datos y la actualizará utilizando las credenciales contenidas en el proyecto:

    - Usuario: "root"
    - Contraseña: "1234"
  
	Además, para configurar la base de datos en el proyecto, utilice el siguiente código en un archivo llamado `dataSource.js`:
	
	```javascript
	const typeorm = require("typeorm");
	const path = require("path");
	
	const dataSource = new typeorm.DataSource({
	    type: "mysql",
	    host: "localhost",
	    port: 3306,
	    username: "root",
	    password: "1234",
	    database: "sonorasia",
	    synchronize: true,
	    entities: [path.join(__dirname, ".", "entities/**/*.js")]
	});
	
	module.exports = dataSource;

# Funciones

## 1. Iniciar sesión

Para iniciar sesión, acceda a la siguiente dirección:

    http://localhost:3000/login

Inicie sesión con el super usuario creado en los primeros pasos:

    Usuario: "admin@correo.com"
    Contraseña: "admin"

Después, aparecerá la primera ventana con funciones.

## 2. Agregar usuario / Eliminar usuario

Al desplegarse la siguiente en modo super_usuario, aparecerá la opción de agregar usuario para crear un nuevo usuario en cualquiera de sus niveles. Puede elegir entre Mesero, Administrador y Cocinero.

Al confirmar la acción, se realizará un chequeo de errores interno y se actualizará la base de datos. También puede eliminar usuarios en el listado.

## 3. Agregar Ingrediente / Agregar Producto (Agregar - Eliminar)

Al iniciar sesión como un usuario administrador, tendrá acceso a dos funciones: Agregar Ingrediente y Agregar Producto.

Ambas funciones le permiten agregar nuevos elementos y mostrar una lista de los existentes, con la posibilidad de eliminarlos.

## 4. Registrar Orden / Terminar Orden / Eliminar Orden

Inicie sesión con un usuario de tipo "Mesero" para acceder a la función de registrar orden. Añada productos a la orden y confirme la acción. Tanto el mesero como el cocinero tienen la opción de terminar o eliminar la orden.

¡Disfrute de la aplicación Sonorasia!

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

---

### Sonorasia

Este proyecto es una aplicación que permite la creación de una base de datos llamada "sonorasia" ,para el restaurante del mismo nombre.

La aplicación consta de diversos módulos y dependencias las cuales son los siguientes:

El equipo está conformado por : 

	- Oscar Minjarez
	- Adrián Lizárraga
	- Alejandro Izaguirre

------------

#Primeros Pasos 
1. Después de obtener el repositorio deberemos ejecutar el comando:
   
		npm install

	para instalar todas las dependencias del proyecto

3. Debe existir una base de datos llamada "sonorasia" en mysql ( Ejecutar el siguiente query )
	2.1 Debe crearse manualmente un super usuario para tener el control total de la aplicación

		DROP DATABASE IF EXISTS sonorasia;
		CREATE DATABASE sonorasia;
		//crear super usuario
		INSERT INTO sonorasia.super_usuarios (id, correo, nombreUsuario, contrasenia) VALUES ('1', 'correoadmin@correo.com', 'admin', 'admin');

2. Despúes ejecutamos el comando:
   
		npm start
	
    el cual realizará un check de la base de datos, y actualizará la ya existente llamda "sonorasia" en mySQL, 	utilizando las credenciales contenidas en el proyecto, en este caso, la db para el proyecto es:
   
		Usuario : "root", 
		Contraseña: "1234"
	
4. La base de datos está compuesta por diversas tablas:

   
		administradores
		cocineros
		ingredientes
		meseros
		ordenes
		productos
		super_usuarios
		
### Entidades:

#### 	Administradores

Los administradores tienen acceso a todas las funciones de agregar eliminar y modificar todas las entidades

	- id
	- nombreUsuario
	- contrasenia
	- superUsuarioId
	- puesto
------------

#### 	Cocineros

Los cocineros tienen acceso a funciones de comanda, es decir "Orden", como consultarlas, modificarlas, devolverlas, terminarlas

	- id
	- nombreUsuario
	- contrasenia
	- superUsuarioId
	- puesto
 
------------

#### 	Ingredientes

los ingredientes conforman parte de los productos completos , es decir , forman parte de la entidad producto, cada uno tiene un identificador único y un valor número para mostrar la cantidad en existencia

	- id
	- nombreIngrediente
	- cantidad
	- productoId
	
Los ingredientes pueden estar almacenados en un producto en una tabla llamadda prdocutos_ingredientes

------------

#### 	Meseros

Los meseros tienen acceso a las funciones de Alta, Actualización, Consulta y eliminación de Órdenes

	- id
	- nombreUsuario
	- contrasenia
	- superUsuarioId
	- puesto
 
------------

#### 	Ordenes

Las órdenes cuentan con registros únicos, y en ellas están contenidos diversos ids, es decir, quien está tomando la orden ("Mesero"), y quien está fabricando la Órden ("Cocinero"), también en ella están contenidos los diversos productos

	- id
	- nombreOrden
	- meseroId
	- cocineroId
 
Las órdenes contienen varios productos en una tabla relacional llamada "ordenes_productos"

------------

#### 	Productos

Los Productos están contenidos en las entidades de Orden y pueden contar con varios elementos, un producto 

	- id
	- nombreProducto
	- ordenId
	- administradorId
 
Los productos pueden estar almacenados en varias órdenes en la tabla relacional llamda "ordenes_productos"
Los productos pueden contener varios ingredientes los cuales se almacenan en una tabla llamada "productos_ingredientes"

------------

#### 	Super Usuarios

	- id
	- correo
	- nombreUsuario
	- contrasenia
 
------------

------------

#Funciones

### 1. Iniciar sesión

para iniciar sesión deberemos ingresar a la siguiente dirección:

	http://localhost:3000/login

dentro ingresaremos con el super usuario que creamos en los primeros pasos, en este caso es:

		Usuario: "correo@correo.com"
		Password: "admin"

después aparecerá la primer ventana con funciones.

### 2. Agregar usuario / Eliminar usuario

Al desplegarse la siguiente en modo super_usuario, saldrá la opción de agregar usuario para crear un nuevo usuario en cualquiera de sus niveles, de tal modo que puedan acceder a sus funciones según sus categorías

aparecerá un formulario nuevo de registro el cual tiene los siguientes apartados:

	Usuario  (campo de texto)
	Contraseña (campo de texto)
	Tipo de Usuario ((podrá elegir entre Mesero, Administradory Cocinero))

y el botón de "Registrar nuevo usuario" para confirmar la acción.

al confirmar la acción , se realizará un check de errores interno y después se actualziará la base de datos, y en caso de que el usuario sea generado con éxito, aparecerá enlistado de nuestro formulario junto a los otros usuarios creados.

En ese mismo apartado tendremos la posibilidad de eliminar usuario en el listado de usuarios, al pulsar el botón rojo de eliminar y confirmando la acción.

------------


### 3. Agregar Ingrediente / Agregar Producto (Agregar - Eliminar)

Al inciar sesión como un usuario administrador, tendremos acceso a dos funciones, Agregar Ingrediente y Agregar producto

Agregar ingrediente contiene:

		Nombre de ingrediente 
		Cantidad
		Botón agregar

Agregar Producto contiene: 

	Nombre del producto
	Ingredientes
	Costo
	Botón Agregar

Al rellenar los modales de cada apartado, aparecerá una lista de productos, los cuales podremos eliminar en su botón correspondiente.

------------

### 4. Registrar Orden / Terminar Orden / Eliminar Orden

Al iniciar sesión con un usuario de tipo "Mesero", tendremos acceso a la función de registrar orden la cual nos lleva a una plantilla similar a la de registrar usuario.

nos desplegará un modal con el nombre del cliente, sus datos, y los productos que contiene la orden, para ello, deberán existir productos dentro de la base de datos, y sus ingredientes.

al seleccionar el producto y lo agregamos a la orden, nos pedirá confirmar la orden junto a su costo, y al terminar, se añadirá a la lista de órdenes por debajo de la función principal.

El mesero  y el cocinero tendrán la opción de terminar la orden o eliminarla.


------------


![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.


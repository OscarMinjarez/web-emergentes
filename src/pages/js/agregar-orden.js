const obtenerOrdenes = async () => {
    const opciones = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await fetch("/ordenes", opciones);
        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
}

const obtenerProductos = async () => {
    const opciones = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await fetch("/productos", opciones);
        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
        return [];
    }
}

const llenarOpcionesProductos = async () => {
    const selectProductos = document.getElementById('productos');
    const productos = await obtenerProductos();
    selectProductos.innerHTML = '';
    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.nombreProducto;
        option.textContent = producto.nombreProducto;
        option.dataset.id = producto.id;
        selectProductos.appendChild(option);
    });
}

const obtenerDatosOrden = () => {
    const nombreCliente = document.getElementById("nombreCliente").value;
    const numeroTelefono = document.getElementById("numeroTelefono").value;
    const productosOrden = document.getElementById("productos");
    const productos = [];
    for (let i = 0; i < productosOrden.options.length; i++) {
        if (productosOrden.options[i].selected) {
            const idProducto = productosOrden.options[i].dataset.id;
            productos.push({ id: idProducto, nombreProducto: productosOrden.options[i].value });
        }
    }
    return {
        nombreCliente,
        numeroTelefono,
        productos,
        total: 300,
        estatus: "En proceso"
    };
}

const agregarOrden = async (orden) => {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orden)
    };
    try {
        const response = await fetch("/ordenes", opciones);
        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
}

const tablaOrdenesBody = document.getElementById("tabla-ordenes-body");

const agregarFilaOrden = (orden) => {
    const fila = document.createElement("tr");
    fila.dataset.idOrden = orden.id;
    const columnaNumeroOrden = document.createElement("td");
    columnaNumeroOrden.textContent = orden.id;
    fila.appendChild(columnaNumeroOrden);
    const columnaNombre = document.createElement("td");
    columnaNombre.textContent = orden.nombreCliente;
    fila.appendChild(columnaNombre);
    const columnaTelefono = document.createElement("td");
    columnaTelefono.textContent = orden.numeroTelefono;
    fila.appendChild(columnaTelefono);
    const columnaProductos = document.createElement("td");
    if (orden.productos.length > 0) {
        const nombreProductos = orden.productos.map(producto => producto.nombreProducto);
        columnaProductos.textContent = nombreProductos.join(", ");
    } else {
        columnaProductos.textContent = "N/A";
    }
    fila.appendChild(columnaProductos);
    const columnaTotal = document.createElement("td");
    columnaTotal.innerText = "$" + orden.total;
    fila.appendChild(columnaTotal);
    const columnaEstatus = document.createElement("td");
    columnaEstatus.innerText = orden.estatus;
    fila.appendChild(columnaEstatus);
    const columnaAcciones = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.className = "btn btn-danger btn-eliminar";
    botonEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>';
    botonEliminar.dataset.idOrden = orden.id;
    botonEliminar.addEventListener("click", () => mostrarConfirmarEliminarModal(orden.id));
    columnaAcciones.appendChild(botonEliminar);
    fila.appendChild(columnaAcciones);
    tablaOrdenesBody.appendChild(fila);
}

const agregarOrdenBtn = document.getElementById("agregar-orden-btn");

agregarOrdenBtn.addEventListener("click", async () => {
    const orden = obtenerDatosOrden();
    const ordenGuardada = await agregarOrden(orden);
    console.log(ordenGuardada);
    agregarFilaOrden(ordenGuardada);
});

const cargarOrdenesTabla = async (ordenes) => {
    ordenes.forEach((orden) => {
        agregarFilaOrden(orden);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    llenarOpcionesProductos();
    const ordenes = await obtenerOrdenes();
    cargarOrdenesTabla(ordenes);
    console.table(ordenes);
});
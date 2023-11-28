const agregarIngredienteBtn = document.getElementById("agregar-ingrediente-btn");
const agregarProductoBtn = document.getElementById("agregar-producto-btn");
const tablaProductos = document.getElementById("tabla-productos-body");

agregarIngredienteBtn.addEventListener("click", () => {
    const ingrediente = obtenerDatosIngrediente();
    agregarIngrediente(ingrediente);
});

agregarProductoBtn.addEventListener("click", async () => {
    const producto = obtenerDatosProducto();
    const productoAgregado = await agregarProducto(producto);
    agregarFilaProducto(productoAgregado);
});

const obtenerDatosIngrediente = () => {
    const nombreIngrediente = document.getElementById("nombreIngrediente").value;
    const cantidad = document.getElementById("cantidadIngrediente").value;
    return { nombreIngrediente, cantidad };
}

const obtenerDatosProducto = () => {
    const nombreProducto = document.getElementById("nombreProducto").value;
    const ingredientesProducto = document.getElementById("ingredientesProducto");
    const ingredientes = [];
    for (let i = 0; i < ingredientesProducto.options.length; i++) {
        if (ingredientesProducto.options[i].selected) {
            const idIngrediente = ingredientesProducto.options[i].dataset.id;
            ingredientes.push({ id: idIngrediente, nombre: ingredientesProducto.options[i].value });
        }
    }
    return {
        nombreProducto,
        ingredientes
    };
};

const agregarIngrediente = async (ingrediente) => {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingrediente)
    };
    try {
        const response = await fetch("/ingredientes", opciones);
        if (response.ok) {
            console.table(await response.json());
        }
    } catch (e) {
        console.log(e);
    }
}

const agregarProducto = async (producto) => {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    };
    try {
        const response = await fetch("/productos", opciones);
        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.log('Error de red:', e);
    }
}

const obtenerIngredientes = async () => {
    const opciones = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await fetch("/ingredientes", opciones);
        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
        return [];
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

const llenarSelectIngredientes = async () => {
    const ingredientes = await obtenerIngredientes();
    const selectIngredientes = document.getElementById("ingredientesProducto");
    selectIngredientes.innerHTML = "";
    ingredientes.forEach(ingrediente => {
        const opcion = document.createElement("option");
        opcion.value = ingrediente.nombreIngrediente;
        opcion.text = ingrediente.nombreIngrediente;
        opcion.dataset.id = ingrediente.id;
        selectIngredientes.appendChild(opcion);
    });
};

const agregarFilaProducto = (producto) => {
    const fila = document.createElement("tr");
    fila.dataset.idProducto = producto.id;
    const columnaNombre = document.createElement("td");
    columnaNombre.textContent = producto.nombreProducto;
    fila.appendChild(columnaNombre);
    const columnaIngredientes = document.createElement("td");
    if (producto.ingredientes.length > 0) {
        const nombresIngredientes = producto.ingredientes.map(ingrediente => ingrediente.nombre);
        columnaIngredientes.textContent = nombresIngredientes.join(", ");
    } else {
        columnaIngredientes.textContent = "N/A";
    }
    fila.appendChild(columnaIngredientes);
    const columnaAcciones = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.className = "btn btn-danger btn-eliminar";
    botonEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>';
    botonEliminar.dataset.idProducto = producto.id;
    botonEliminar.addEventListener("click", () => mostrarConfirmarEliminarModal(producto.id));
    columnaAcciones.appendChild(botonEliminar);
    fila.appendChild(columnaAcciones);
    tablaProductosBody.appendChild(fila);
};


const agregarProductoModal = document.getElementById("agregarProductoModal");

agregarProductoModal.addEventListener('show.bs.modal', () => {
    llenarSelectIngredientes();
});
const tabla = document.querySelector("#tabla-usuarios-body");
const usuarios = [];

const consultarUsuarios = async () => {
    const meseros = await consultarMeseros();
    const cocineros = await consultarCocineros();
    const administradores = await consultarAdministradores();
    Promise.all([meseros, cocineros, administradores]).then(dataArray => {
        usuarios.push(...dataArray.flat());
        console.table(usuarios);
        mostrarUsuariosEnTabla();
    }).catch(error => {
        console.error(error);
    });
};

const consultarMeseros = async () => {
    const meseros = fetch("/meseros").then(response => {
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
    });
    return meseros;
}

const consultarCocineros = async () => {
    const cocineros = fetch("/cocineros").then(response => {
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
    });
    return cocineros;
}

const consultarAdministradores = async () => {
    const administradores = fetch("/administradores").then(response => {
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json()
    });
    return administradores
}

const mostrarUsuariosEnTabla = async () => {
    const tabla = document.querySelector('#tabla-usuarios-body');
    tabla.innerHTML = '';

    usuarios.forEach(usuario => {
        const fila = document.createElement('tr');

        const celdaUsuario = document.createElement('td');
        celdaUsuario.textContent = usuario.nombreUsuario;
        celdaUsuario.classList.add("align-middle");
        fila.appendChild(celdaUsuario);

        const celdaPuesto = document.createElement('td');
        celdaPuesto.textContent = usuario.puesto;
        celdaPuesto.classList.add("align-middle");
        fila.appendChild(celdaPuesto);

        const celdaOperacion = document.createElement('td');
        celdaOperacion.classList.add('text-end');

        const botonEditar = document.createElement('button');
        botonEditar.classList.add('btn', 'btn-primary', 'me-2');
        botonEditar.innerHTML = '<i class="fa-solid fa-pen"></i>';
        botonEditar.addEventListener('click', () => editarUsuario(usuario.id));
        celdaOperacion.appendChild(botonEditar);

        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn', 'btn-danger');
        botonEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>';
        botonEliminar.addEventListener('click', () => eliminarUsuario(usuario.id));
        celdaOperacion.appendChild(botonEliminar);

        fila.appendChild(celdaOperacion);
        tabla.appendChild(fila);
    });
};

const editarUsuario = (id) => {
    console.log(`Editar usuario con ID: ${id}`);
};

const eliminarUsuario = (id) => {
    console.log(`Eliminar usuario con ID: ${id}`);
};

window.onload = async () => {
    await consultarUsuarios();
};
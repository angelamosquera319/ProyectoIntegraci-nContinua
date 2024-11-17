// Simulación de datos iniciales en la tabla
let conciertos = [
    { nombre: 'Concierto 1', fecha: '2024-05-12', ubicacion: 'Bogotá', artista: 'Artista 1' },
    { nombre: 'Concierto 2', fecha: '2024-06-18', ubicacion: 'Medellín', artista: 'Artista 2' }
];

// Elementos del formulario para editar/agregar conciertos
const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('fecha');
const ubicacionInput = document.getElementById('ubicacion');
const artistaInput = document.getElementById('artista');
const guardarBtn = document.getElementById('guardar');

// Elemento para la tabla donde se mostrarán los conciertos
const tablaConciertos = document.getElementById('tablaConciertos');

// Variable para saber si estamos editando o agregando un nuevo concierto
let editando = false;
let indexEdicion = null; // Índice del concierto que se está editando

// Función para renderizar la tabla con los conciertos
function renderizarTabla() {
    tablaConciertos.innerHTML = ''; // Limpiar el contenido actual de la tabla
    conciertos.forEach((concierto, index) => {
        let fila = `
            <tr>
                <td>${concierto.nombre}</td>
                <td>${concierto.fecha}</td>
                <td>${concierto.ubicacion}</td>
                <td>${concierto.artista}</td>
                <td><button class="boton" onclick="editarConcierto(${index})">Editar</button></td>
                <td><button class="boton" onclick="eliminarConcierto(${index})">Eliminar</button></td>
            </tr>
        `;
        tablaConciertos.innerHTML += fila;
    });
}

// Función para editar un concierto (copiar los datos al formulario)
function editarConcierto(index) {
    // Cargar los datos de la fila en los campos de entrada del formulario
    let concierto = conciertos[index];
    nombreInput.value = concierto.nombre;
    fechaInput.value = concierto.fecha;
    ubicacionInput.value = concierto.ubicacion;
    artistaInput.value = concierto.artista;

    // Cambiar el modo a edición
    editando = true;
    indexEdicion = index;
}

// Función para eliminar un concierto
function eliminarConcierto(index) {
    conciertos.splice(index, 1); // Eliminar el concierto del array
    renderizarTabla(); // Volver a renderizar la tabla
      // Limpiar los campos del formulario
      nombreInput.value = '';
      fechaInput.value = '';
      ubicacionInput.value = '';
      artistaInput.value = '';  
}

// Función para guardar o modificar un concierto
function guardarConcierto() {
    // Crear un objeto con los datos del formulario
    let nuevoConcierto = {
        nombre: nombreInput.value,
        fecha: fechaInput.value,
        ubicacion: ubicacionInput.value,
        artista: artistaInput.value
    };

    if (editando) {
        // Si estamos editando, modificar el concierto en el array
        conciertos[indexEdicion] = nuevoConcierto;
        editando = false; // Salir del modo edición
        indexEdicion = null; // Limpiar el índice de edición
    } else {
        // Si no estamos editando, agregar el nuevo concierto al array
        conciertos.push(nuevoConcierto);
    }

    // Limpiar los campos del formulario
    nombreInput.value = '';
    fechaInput.value = '';
    ubicacionInput.value = '';
    artistaInput.value = '';

    // Volver a renderizar la tabla
    renderizarTabla();
}

// Evento de clic en el botón "Guardar"
guardarBtn.addEventListener('click', guardarConcierto);

// Renderizar la tabla al cargar la página
renderizarTabla();

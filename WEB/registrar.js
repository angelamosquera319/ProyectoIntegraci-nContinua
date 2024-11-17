// Simulación de almacenamiento de usuarios en JSON
let usuarios = [
    {
        nombre: 'Admin',
        correo: 'admin@proyecto.com',
        contraseña: '123',
        rol: 'Administrador'
    }
];

// Selección de elementos del DOM para el registro
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const contraseñaInput = document.getElementById('contraseña');
const registrarBtn = document.getElementById('registrar');

// Selección de elementos del DOM para el ingreso
const correoLoginInput = document.getElementById('correoUsuario');
const contraseñaLoginInput = document.getElementById('contraseñaUsuario');
const ingresarBtn = document.getElementById('ingresar');

// Modal y mensaje de confirmación/error
const modalMensaje = document.getElementById('modalMensaje');
const modalMensajeTexto = document.getElementById('modalMensajeTexto');
const aceptarBtnMensaje = document.getElementById('aceptar');

// Función para mostrar un modal con el mensaje proporcionado
function mostrarMensaje(texto) {
    modalMensajeTexto.textContent = texto; // Cambiar el texto del mensaje
    modalMensaje.style.display = 'flex';   // Mostrar el modal
    // Borrar los campos de entrada del formulario
    nombreInput.value = '';
    correoInput.value = '';
    contraseñaInput.value = '';

    correoLoginInput.value = '';
    contraseñaLoginInput.value = '';

}

// Función para ocultar el modal
function ocultarMensaje() {
    modalMensaje.style.display = 'none';   // Ocultar el modal
}

// Función que se ejecuta cuando se hace clic en el botón "Registrar"
function registrarUsuario() {
    // Crear un nuevo objeto usuario con los valores del formulario de registro
    let nuevoUsuario = {
        nombre: nombreInput.value,
        correo: correoInput.value,
        contraseña: contraseñaInput.value,
        rol: 'Usuario' // El rol siempre será "Usuario"
    };

    // Agregar el nuevo usuario al array de usuarios
    usuarios.push(nuevoUsuario);

    // Mostrar los usuarios simulados en la consola (esto simula el guardado)
    console.log(usuarios);

    // Mostrar mensaje de confirmación
    mostrarMensaje('Usuario creado');
}

// Función que se ejecuta cuando se hace clic en el botón "Ingresar"
function ingresarUsuario() {
    // Obtener los valores ingresados en los campos de login
    let correoIngresado = correoLoginInput.value;
    let contraseñaIngresada = contraseñaLoginInput.value;

    // Buscar el usuario que coincide con el correo y la contraseña
    let usuarioEncontrado = usuarios.find(usuario => usuario.correo === correoIngresado && usuario.contraseña === contraseñaIngresada);

    if (usuarioEncontrado) {
        // Si el usuario es el administrador, redirigir a la página de gestión de conciertos
        if (usuarioEncontrado.rol === 'Administrador') {
            window.location.href = 'gestionconciertos.html';
        } 
        // Si es un usuario, redirigir a la página de usuario
        else if (usuarioEncontrado.rol === 'Usuario') {
            window.location.href = 'usuario.html';
        }
    } else {
        // Si no se encontró el usuario o los datos son incorrectos, mostrar un mensaje de error
        mostrarMensaje('Correo y/o contraseña incorrectos');
    }
}

// Agregar eventos de clic a los botones de "Registrar" y "Ingresar"
registrarBtn.addEventListener('click', registrarUsuario);
ingresarBtn.addEventListener('click', ingresarUsuario);

// Evento para cerrar el modal de confirmación al hacer clic en el botón "Aceptar"
aceptarBtnMensaje.addEventListener('click', ocultarMensaje);

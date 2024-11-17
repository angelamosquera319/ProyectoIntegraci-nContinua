// Seleccionar los elementos del DOM
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const mensajeInput = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');
const modal = document.getElementById('modal');
const aceptarBtn = document.getElementById('aceptar');

// Función para mostrar el modal con el mensaje "Mensaje enviado"
function mostrarMensaje() {
    modal.style.display = 'flex'; // Mostrar el modal
}

// Función para ocultar el modal
function ocultarMensaje() {
    modal.style.display = 'none'; // Ocultar el modal
}

// Función que se ejecuta cuando se hace clic en el botón "Enviar"
function enviarFormulario() {
    // Borrar el contenido de los campos de entrada
    nombreInput.value = '';
    correoInput.value = '';
    mensajeInput.value = '';

    // Mostrar el mensaje de confirmación
    mostrarMensaje();
}

// Agregar evento de clic al botón "Enviar"
enviarBtn.addEventListener('click', enviarFormulario);

// Agregar evento de clic al botón "Aceptar" del modal
aceptarBtn.addEventListener('click', ocultarMensaje);

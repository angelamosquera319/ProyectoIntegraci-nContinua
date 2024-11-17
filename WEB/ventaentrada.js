// Recuperar la imagen y el nombre del concierto desde localStorage
let imagenConciertoSeleccionado = localStorage.getItem("imagenConciertoSeleccionado");
let nombreConciertoSeleccionado = localStorage.getItem("nombreConciertoSeleccionado");

if (imagenConciertoSeleccionado) {
    // Mostrar la imagen y el nombre en la página
    document.getElementById("imagenConcierto").src = imagenConciertoSeleccionado;
    document.getElementById("nombreConcierto").textContent = nombreConciertoSeleccionado;
}

// Definir los precios de las entradas
const precioGeneral = 10000000; // 10.000.000
const precioVIP = 20000000; // 20.000.000

// Elementos del DOM
const generalRadioBtn = document.getElementById("general");
const vipRadioBtn = document.getElementById("vip");
const precioConcierto = document.getElementById("precioConcierto");
const comprarEntradaBtn = document.getElementById("comprarEntrada");
const mensajeEmergente = document.getElementById("mensajeEmergente");

// Escuchar los cambios en los radio buttons
generalRadioBtn.addEventListener("change", function() {
    if (generalRadioBtn.checked) {
        precioConcierto.textContent = precioGeneral.toLocaleString(); // Mostrar el precio con formato
    }
});

vipRadioBtn.addEventListener("change", function() {
    if (vipRadioBtn.checked) {
        precioConcierto.textContent = precioVIP.toLocaleString(); // Mostrar el precio con formato
    }
});

// Escuchar el clic en el botón "Comprar entrada"
comprarEntradaBtn.addEventListener("click", function() {
    mostrarMensaje('Compra exitosa');
});

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

// Evento para cerrar el modal de confirmación al hacer clic en el botón "Aceptar"
aceptarBtnMensaje.addEventListener('click', ocultarMensaje);

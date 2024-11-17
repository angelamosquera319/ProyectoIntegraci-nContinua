// Botón de "Cerrar sesión"
document.getElementById("cerrarSesion").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirige a la página de inicio (index.html)
});

// Evento para los conciertos
let conciertos = document.querySelectorAll(".concierto");

// Agregar evento de clic a cada concierto
conciertos.forEach(function(concierto) {
    concierto.addEventListener("click", function() {
        // Obtener la imagen del concierto clickeado
        let imagenConcierto = this.querySelector("img").src;
        let nombreConcierto = this.querySelector("p").textContent;

        // Guardar la imagen y el nombre del concierto en el localStorage para usarlos en ventaentrega.html
        localStorage.setItem("imagenConciertoSeleccionado", imagenConcierto);
        localStorage.setItem("nombreConciertoSeleccionado", nombreConcierto);
        
        // Redirigir a la página ventaentrega.html
        window.location.href = "ventaentrada.html";
    });
});

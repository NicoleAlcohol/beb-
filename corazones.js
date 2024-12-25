let contador = 0; // Para llevar el control de los clics
const botonCorazon = document.getElementById("boton-corazon");
const mensajes = document.getElementById("mensajes");

botonCorazon.addEventListener("click", () => {
    contador++;
    
    // Cambiar el mensaje dependiendo del número de clics
    if (contador === 1) {
        mostrarMensaje("te", "left");
    } else if (contador === 2) {
        mostrarMensaje("amo", "center");
    } else if (contador === 3) {
        mostrarMensaje("muchísimo", "right");
    } else if (contador === 4) {
        mostrarCorazoncitos();
        contador = 0; // Reiniciar el contador después del cuarto clic
    }
});

// Función para mostrar el mensaje en una posición específica
function mostrarMensaje(mensaje, posicion) {
    const nuevoMensaje = document.createElement("span");
    nuevoMensaje.textContent = mensaje;
    nuevoMensaje.style.position = "absolute";
    nuevoMensaje.style.fontSize = "2em";
    nuevoMensaje.style.color = "#ff69b4";
    nuevoMensaje.style.fontFamily = "'Comic Sans MS', cursive, sans-serif"; // Fuente Comic Sans
    
    if (posicion === "left") {
        nuevoMensaje.style.left = "10%";
        nuevoMensaje.style.top = "50%";
        nuevoMensaje.style.transform = "translateY(-50%)";
    } else if (posicion === "center") {
        nuevoMensaje.style.left = "50%";
        nuevoMensaje.style.top = "50%";
        nuevoMensaje.style.transform = "translate(-50%, -50%)";
    } else if (posicion === "right") {
        nuevoMensaje.style.right = "10%";
        nuevoMensaje.style.top = "50%";
        nuevoMensaje.style.transform = "translateY(-50%)";
    }
    
    document.body.appendChild(nuevoMensaje);
}

// Función para mostrar los corazoncitos
function mostrarCorazoncitos() {
    for (let i = 0; i < 50; i++) {
        const corazon = document.createElement("span");
        corazon.textContent = "💖";
        corazon.style.position = "absolute";
        corazon.style.fontSize = `${Math.random() * 30 + 20}px`; // Tamaño aleatorio
        corazon.style.color = "#ff1493";
        corazon.style.top = `${Math.random() * window.innerHeight}px`;
        corazon.style.left = `${Math.random() * window.innerWidth}px`;
        corazon.style.animation = "moverCorazon 3s ease-out forwards";
        corazon.style.fontFamily = "'Comic Sans MS', cursive, sans-serif"; // Fuente Comic Sans
        
        document.body.appendChild(corazon);
        
        // Eliminar el corazón después de la animación
        setTimeout(() => {
            corazon.remove();
        }, 3000);
    }
}

// Estilo de la animación de los corazoncitos
const estiloAnimacion = document.createElement("style");
estiloAnimacion.innerHTML = `
@keyframes moverCorazon {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: translateY(-100px) scale(0); opacity: 0; }
}
`;
document.head.appendChild(estiloAnimacion);

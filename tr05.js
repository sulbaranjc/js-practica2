let contadorCambios = 0;
let intervalo;

document.getElementById('startButton').addEventListener('click', function() {
    // Inicia el intervalo para cambiar el color de fondo cada segundo
    intervalo = setInterval(cambiarColorFondo, 1000);
});

function cambiarColorFondo() {
    // Colores de fondo disponibles
    const colores = ["#FF5733", "#33FFA2", "#3363FF", "#FF33DD", "#FFFF33", "#33FF33", "#3333FF", "#000000"];

    // Cambia el color de fondo
    document.body.style.backgroundColor = colores[contadorCambios % colores.length];

    contadorCambios++;

    // Si se alcanzan 8 cambios de color, detiene el intervalo y muestra un mensaje de alerta
    if (contadorCambios === 8) {
        clearInterval(intervalo);
        alert("Se han terminado los cambios de colores.");
    }
}

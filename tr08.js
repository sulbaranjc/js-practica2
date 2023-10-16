function moverAlPrincipio(id) {
  let boton = document.getElementById(id);
  let contenedor = document.getElementById('contenedorBotones');
  contenedor.insertBefore(boton, contenedor.firstChild);
}

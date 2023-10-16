document.getElementById('insertarBoton').addEventListener('click', function() {
  // Obtener el nuevo párrafo ingresado por el usuario
  const nuevoTexto = document.getElementById('nuevoParrafo').value;

  // Crear un nuevo elemento de párrafo
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = nuevoTexto;

  // Obtener el contenedor de párrafos existentes
  const contenedorParrafos = document.getElementById('contenedorParrafos');

  // Insertar el nuevo párrafo antes de los párrafos existentes
  contenedorParrafos.insertBefore(nuevoParrafo, contenedorParrafos.firstChild);

  // Limpiar el área de texto después de la inserción
  document.getElementById('nuevoParrafo').value = '';
});

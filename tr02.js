document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtiene los valores ingresados por el usuario
  const producto = document.getElementById('producto').value.toLowerCase();
  const marca = document.getElementById('marca').value.toLowerCase();
  const precio = parseFloat(document.getElementById('precio').value);

  let descuento = 0;

  // Calcula el descuento según la marca de la leche
  if (producto === 'leche') {
      if (marca === 'asturiana') {
          descuento = 0.05;
      } else if (marca === 'pascual') {
          descuento = 0.10;
      }
  }

  // Calcula el precio final
  const precioFinal = precio * (1 - descuento);

  // Muestra el resultado en la página
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <p>Producto: ${producto}</p>
      <p>Marca: ${marca}</p>
      <p>Precio Original: $${precio.toFixed(2)}</p>
      <p>Descuento: ${descuento * 100}%</p>
      <p>Precio Final: $${precioFinal.toFixed(2)}</p>
  `;
});

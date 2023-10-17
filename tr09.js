function mostrar(tipo) {
  const imagenes = document.querySelectorAll('td img');
  imagenes.forEach(img => {
      const index = parseInt(img.getAttribute('data-index'));
      if (tipo === 'pares') {
          if (index % 2 === 0) {
              img.style.display = 'block';
          } else {
              img.style.display = 'none';
          }
      } else if (tipo === 'impares') {
          if (index % 2 !== 0) {
              img.style.display = 'block';
          } else {
              img.style.display = 'none';
          }
      }
  });
}

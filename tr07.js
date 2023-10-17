        // Datos a insertar en la tabla
        const datos = [
          ['1', 'rojo', 'Resino'],
          ['2', 'azul', 'Minayo'],
          ['3', 'verde', 'Resino']
      ];

      // Obtener el cuerpo de la tabla
      const tablaBody = document.getElementById('tablaBody');

      // Recorrer los datos y crear filas y celdas dinámicamente
      datos.forEach(fila => {
          const tr = document.createElement('tr'); // Crear una fila

          fila.forEach(dato => {
              const td = document.createElement('td'); // Crear una celda
              td.textContent = dato; // Establecer el texto de la celda
              tr.appendChild(td); // Agregar la celda a la fila
          });

          tablaBody.appendChild(tr); // Agregar la fila al cuerpo de la tabla
      });

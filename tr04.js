        let nuevaVentana;

        function abrirVentana() {
            nuevaVentana = window.open('', 'NuevaVentana', 'menubar=yes,resizable=yes,width=500,height=500');
            nuevaVentana.document.write('<html><head><title>Nueva Ventana</title></head><body>');
            nuevaVentana.document.write('<h1>Nueva Ventana</h1>');
            nuevaVentana.document.write('<h1>width=500,height=500</h1>');
            nuevaVentana.document.write('<button onclick="cerrarVentana()">CERRAR</button>');
            nuevaVentana.document.write('<script>function cerrarVentana() { window.close(); }</script>');
            nuevaVentana.document.write('</body></html>');
            nuevaVentana.document.close();
        }

        function cerrarVentana() {
            if (nuevaVentana) {
                nuevaVentana.close();
            }
        }

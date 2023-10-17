function calcularCuadrado(numero) {
  return numero * numero;
}

function calcularCubo(numero) {
  return numero * numero * numero;
}

function calcularResultado() {
  const numeroInput = document.getElementById('numero');
  const resultadoPara = document.getElementById('resultado');

  const numero = parseFloat(numeroInput.value);

  if (isNaN(numero)) {
      resultadoPara.textContent = 'Por favor, ingresa un número válido.';
  } else {
      let resultado;
      if (numero > 50) {
          resultado = calcularCuadrado(numero);
          resultadoPara.textContent = `El cuadrado de ${numero} es ${resultado}.`;
      } else {
          resultado = calcularCubo(numero);
          resultadoPara.textContent = `El cubo de ${numero} es ${resultado}.`;
      }
  }
}

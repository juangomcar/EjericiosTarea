document.getElementById("Titulo").innerHTML = "Cajero Automatico"


var clave = "0000";
var intentosRestantes = 2;

const entradaClave = document.getElementById("claveInput");
const entradaMonto = document.getElementById("montoInput");
const botonIngresar = document.getElementById("Ingresar");
const botonRetirar = document.getElementById("Retirar");
const botonSalir = document.getElementById("Salir");
const resultadoClave = document.getElementById("Clave");
const resultadoOperacion = document.getElementById("OperacionExitosa");
const operaciones = document.getElementById("operaciones");

botonIngresar.addEventListener("click", function() {
  const clv = entradaClave.value;

  if (clave === clv) {
    resultadoClave.textContent = "Clave correcta";
    entradaClave.style.display = "none";
    botonIngresar.style.display = "none";
    operaciones.style.display = "block";
  } else {
    entradaClave.value = "";
    resultadoClave.textContent = "Clave incorrecta, intentos restantes: " + intentosRestantes;
    intentosRestantes--;

    if (intentosRestantes === -1) {
      resultadoClave.textContent = "Esta tarjeta ha sido bloqueada";
      botonIngresar.disabled = true;
      botonRetirar.disabled = true;
      botonSalir.disabled = true;
    }
  }
});

botonRetirar.addEventListener("click", function() {
  const monto = parseFloat(entradaMonto.value);
  resultadoClave.textContent = "";
  if (!isNaN(monto) && monto > 0) {
    resultadoOperacion.textContent = "Operación exitosa, usted retiró $" + monto + " COP";
  } else {
    resultadoOperacion.textContent = "Monto inválido. Intente nuevamente.";
  }
});

botonSalir.addEventListener("click", function() {
  resultadoClave.textContent = "";
  resultadoOperacion.textContent = "";
  entradaClave.value = "";
  entradaMonto.value = "";
  entradaClave.style.display = "block";
  botonIngresar.style.display = "block";
  operaciones.style.display = "none";
  intentosRestantes = 3;
  botonIngresar.disabled = false;
  botonRetirar.disabled = false;
  botonSalir.disabled = false;
});
const entrada = document.getElementById("ano")
const resultado = document.getElementById("resultado")
// Obtienen un elemento por su ID
function verificarEdad() {
  const numero = entrada.value
  const resultadoOperacion = 2023 - numero;
  if (resultadoOperacion>170 || resultadoOperacion<0) {resultado.innerText = "Valor Invalido"; return}
  if (resultadoOperacion >= 18 && resultadoOperacion <= 55) { resultado.innerText = "Apto para trabajar" }
  else { resultado.innerText = "No apto para el empleo" }
}
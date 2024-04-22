/*
Descripcion: Actividad01 Ejercicio4 
Desarrollador: Samuel Yabeta Villagomez
Fecha: 2024-04-21
Cambios: Ninguno
*/
// Array de nombres
var nombres = ["juan", "maría", "pedro", "laura", "carlos"];
// Array de apellidos
var apellidos = ["gómez", "pérez", "sánchez", "rodríguez", "gonzález"];

// Función para generar un número aleatorio entre min (incluido) y max (excluido)
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para formatear un nombre o apellido
function formatearNombreApellido(nombreApellido) {
  var primerElemento = nombreApellido.charAt(0).toUpperCase();
  var resto = nombreApellido.substring(1).toLowerCase();
  return primerElemento + resto;
}

// Nuevo array combinado de forma aleatoria
var combinado = [];
var totalNombres = nombres.length;
var totalApellidos = apellidos.length;

for (var i = 0; i < Math.max(totalNombres, totalApellidos); i++) {
  var nombre = nombres[generarNumeroAleatorio(0, totalNombres)];
  var apellido = apellidos[generarNumeroAleatorio(0, totalApellidos)];

  var nombreFormateado = formatearNombreApellido(nombre);
  var apellidoFormateado = formatearNombreApellido(apellido);

  combinado.push(nombreFormateado + " " + apellidoFormateado);
}

// Mostrar resultados en el DOM
window.addEventListener('DOMContentLoaded', function() {
  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = combinado.join("<br>");
});
/*
Descripcion: Actividad01 Ejercicio2 
Desarrollador: Israel Simone Justiniano
Fecha: 2024-04-20
Cambios: Ninguno
*/



var usuario = prompt("Ingrese nombre de usuario:");
var contrasena = prompt("Ingrese su contraseña:");

var validarUsuario = ["juan", "pedro", "maria", "raul"];
var validarContrasena = "D153n0W3b2";

if (validarUsuario.includes(usuario) && contrasena === validarContrasena) {
    alert("Inicio de sesión exitoso, ¡Bienvenido, " + usuario + "!");
    console.log("Inicio de sesión exitoso, ¡Bienvenido, " + usuario + "!");
} else {
    alert("Error: Nombre de usuario o contraseña incorrectos");
}
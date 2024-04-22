/*
Descripcion: Actividad01 Ejercicio4 
Desarrollador: Samuel Yabeta Villagomez
Fecha: 2024-04-21
Cambios: Ninguno
*/




function contarLetraO(frase) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
      if (frase[i].toLowerCase() === 'o') {
        contador++;
      }
    }
    return contador;
  }
  
  function obtenerVocales(frase) {
    var vocales = '';
    var contadorVocales = 0;
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;
  
    for (var i = 0; i < frase.length; i++) {
      var letra = frase[i].toLowerCase();
  
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        if (!vocales.includes(letra)) {
          vocales += letra;
          contadorVocales++;
        }
  
        switch (letra) {
          case 'a':
            contadorA++;
            break;
          case 'e':
            contadorE++;
            break;
          case 'i':
            contadorI++;
            break;
          case 'o':
            contadorO++;
            break;
          case 'u':
            contadorU++;
            break;
        }
      }
    }
  
    return {
      vocales: vocales,
      contadorVocales: contadorVocales,
      contadorA: contadorA,
      contadorE: contadorE,
      contadorI: contadorI,
      contadorO: contadorO,
      contadorU: contadorU
    };
  }
  
  var frase = prompt('Ingresa una frase:');
  var resultadoLetraO = contarLetraO(frase);
  var resultadoVocales = obtenerVocales(frase);
  
  console.log('Cantidad de veces que aparece la letra "o": ' + resultadoLetraO);
  console.log('Vocales que aparecen: ' + resultadoVocales.vocales);
  console.log('Cantidad de veces que aparece la vocal "a": ' + resultadoVocales.contadorA);
  console.log('Cantidad de veces que aparece la vocal "e": ' + resultadoVocales.contadorE);
  console.log('Cantidad de veces que aparece la vocal "i": ' + resultadoVocales.contadorI);
  console.log('Cantidad de veces que aparece la vocal "o": ' + resultadoVocales.contadorO);
  console.log('Cantidad de veces que aparece la vocal "u": ' + resultadoVocales.contadorU);

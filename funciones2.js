//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(numero) {
    console.log(numero);//console.log nos imprime en pantalla el resultado, pero no especifica el tipo de dato.
    return numero; //se usa return para que JS nos retorne el tipo de dato. 
  }

  //Función: cuidadoConElConsoleLog con distinto orden
function cuidadoConElConsoleLog(nombre) {
    return nombre; //se usa return para que JS nos retorne el tipo de dato. 
    console.log(nombre);//aunque hay console.log este no imprimirá nada ya que antes ya se esta retornando el resultado.
    
  }
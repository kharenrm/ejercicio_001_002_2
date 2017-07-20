function dniCalcular(dni){
	var letra = "";
	var indice;
	var tablaLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

	if(typeof(dni)==="number") {
		if(dni<0) {
			letra = "Debes introducir un valor positivo";
		} 
		else if(dni.toString().length<8){
			letra = "Debes introducir un numero de 8 cifras";
		} else {
			indice = dni%23;
			letra = tablaLetras[indice];
		}
		
	} else {
		letra = "Este valor no es numerico!";
	}

	return letra;
}

console.log("La letra del DNI 12312312 es: ",dniCalcular(12312312));
console.log("La letra del DNI pppppppp es: ",dniCalcular("pppppppp"));
console.log("La letra del DNI 123 es: ",dniCalcular(123));
console.log("La letra del DNI -123 es: ",dniCalcular(-1231234));
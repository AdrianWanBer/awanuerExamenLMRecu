
//VARIABLES
var intentos = 0;
var palabra;
var letrasIndividuales = [];
var numeroLetras = document.getElementById("numeroLetras");
var palabraAsteriscos = [];

var TiempoInicio = new Date();

function crearPalabra() {
	palabra = prompt("Propon la palabra para adivinar");
	numeroLetras.innerText = "Palabra: ";
	for (let i = 0; i < palabra.length; i++) {
		palabraAsteriscos[i] = "*";
		numeroLetras.innerText += palabraAsteriscos[i];
	}

}

function adivinarLetra() {
	if (intentos < 6) {


		var descartadas = document.getElementById("descartadas");
		letrasIndividuales = palabra.split("");

		let letraDada = prompt("¿Que letra elijes?");
		//BUCLE QUE BUSCA LAS LETRAS
		for (let i = 0; i < palabra.length; i++) {
			//BUSCA
			if (letraDada == letrasIndividuales[i]) {
				palabraAsteriscos[i] = letraDada;
			}
		}
		descartadas.innerText += letraDada + " - ";

		//SE REIMPRIME LAS LETRAS
		numeroLetras.innerText = "Palabra: ";
		for (let i = 0; i < palabra.length; i++) {

			numeroLetras.innerText += palabraAsteriscos[i];
		}

		var inten = document.getElementById("intentosId");
		inten.innerText = intentos++;
	} else {
		alert("Has perdido");
	}
}

//ADIVINAR LA PLABRA
function adivinarPalabra() {
	var palabraD = prompt("Que palabra es");
	if (palabra == palabraD) {

		numeroLetras.innerText = "Palabra Final: " + palabra;

		if (intentos <= 1) {
			alert("Magnifico");
		} else if (intentos <= 3 && intentos > 1) {
			alert("Bien");
		} else if (intentos <= 5 && intentos > 3) {
			alert("Por poco");
		} else if (intentos > 5) {
			alert("Has perdido");
		}
	}
	//
	var tiempoUltimo = new Date();
	tiempoFinal =  tiempoUltimo.getSeconds() - TiempoInicio.getSecods();

	var tabla = document.getElementById("tabla");
	tabla.innerHTML += "<tr><td>" + palabra + " </td><td>" + intentos + "</td><td>" + tiempoFinal + "</td></tr>";
}

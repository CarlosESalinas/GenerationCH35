package org.letras;

/*
 * Contador de símbolos:
 * Se definen dos grupos:
 * 		1. Grupo 1: métodos booleanos para determinar si corresponde o no
 * 		2. Grupo 2: métods que devuelve el conteo de  símbolos
 */

public class Contador {
	
	// Grupo 1
	public boolean esVocal(char caracter) {
		return (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u'  || caracter == 'A'  || caracter == 'E'  || caracter == 'I'  || caracter == 'O'  || caracter == 'U');
	}
	
	public boolean esNumero(char caracter) {
		// casting para conversion de ASCII (48-57)
		short codigoAscii = (short)caracter;
		return codigoAscii >= 48 && codigoAscii <= 57;
		
	}
	public boolean esConsonante(char caracter) {
		// casting para conversion de ASCII (65-90 or 97 -122)
		short codigoAscii = (short)caracter;
		return (((codigoAscii >=(65) && codigoAscii <= 97) || (codigoAscii >=(97) && codigoAscii <= 122)) && !esVocal(caracter));
		
	}
	public boolean esSimbolo(char caracter) {
		return !(esVocal(caracter) || esNumero(caracter) || esConsonante(caracter));
	}
	
	// Grupo 2
	//Método para contar vocales
	public int contarVocales(String palabra) {
		int vocales = 0;
		for (char caracter : palabra.toCharArray()) {
			if (esVocal(caracter)) {
				vocales++;
			}						
		}
		return vocales;
	}
	//Método para contar numeros
	public int contarNumeros(String palabra) {
		int numeros = 0;
		for (char caracter : palabra.toCharArray()) {
			if (esNumero(caracter)) {
				numeros++;
			}						
		}
		return numeros;
	}
	//Método para contar consonantes
	public int contarConsonantes(String palabra) {
		int consonantes = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esConsonante(caracter)) {
				consonantes++;
			}
		}
		return consonantes;
	}
	//Método para contar simbolos
	public int contarSimbolos(String palabra) {
		int simbolos = 0;
		for (char caracter : palabra.toCharArray()) {
			if (esSimbolo(caracter)) {
				simbolos++;
			}						
		}
		return simbolos;
	}
	
}


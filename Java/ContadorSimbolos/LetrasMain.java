package org.letras;

public class LetrasMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Instanciar objetos (Letras y Contador)
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe tu mensaje aquì: .... ");
		// guardar el texto dado en la variable palabra
		String palabra = letras.leerEntrada();
		 
		// Invocar los métodos 
		Contador contador = new Contador();
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay " + totalVocales + " vocales.");
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay " + totalNumeros + " numeros.");
		int totalConsonantes = contador.contarConsonantes(palabra) ;
		System.out.println("Hay " + totalConsonantes + " consonates.");
		int totalSimbolos = contador.contarSimbolos(palabra) ;
		System.out.println("Hay " + totalSimbolos + " simbolos.");

	}

}

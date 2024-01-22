package org.letras;
import java.util.Scanner;

/*
 * Crear un programa que le solicite un mensaje al usario y cuente cuántas vocales, consonantes
 * númerops y carácteres posee el mensaje
 * 		Letras: métodos para interactuar con el usuario 
 * 		LetrasMain: vamos a instanciar los objetos
 * 		Contador: métodos para contar vocales, consonantes números y carácteres
 */
 
public class Letras {
	// Definir scanner para leer el mensaje del usuario
	Scanner scr = new Scanner(System.in);
	
	// Hacer el scanner sea parte de un método
	public String leerEntrada() {
		return scr.nextLine();
	}
	
	// Método para proporcionar contexto al usuario 
	
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);	
	}
	
}

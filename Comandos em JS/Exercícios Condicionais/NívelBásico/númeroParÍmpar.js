/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Par ou ímpar
Descrição: O usuário insere um número e o programa verifica se ele é par ou ímpar.
*/

let numero = prompt("Digite um número: ")
numero = parseInt(numero)

if (numero % 2){
    console.log("Número ímpar. ")
} else {
    console.log("Número Par. ")
}
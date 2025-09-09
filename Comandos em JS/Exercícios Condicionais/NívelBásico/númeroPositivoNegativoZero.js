/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Classificação Idade
Descrição: O usuário insere um número e verifica-se se ele é positivo negativo ou 0.
*/

let numero = prompt("Digite um número: ")
numero = parseInt(numero)

if ( numero == 0){
    console.log("Número zero. ")
} else if ( numero > 0){
    console.log("Número Positivo. ")
} else{
    console.log("Número Negativo. ")
}
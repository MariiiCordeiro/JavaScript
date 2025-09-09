/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Verificação de números
Descrição: O usuário insere um número e com um `if-else` para verifica-se se o número é positivo, negativo.
Considerando o 0 como sendo um número negativo.
*/

let numero = prompt("Digite um número: ");
numero = parseInt(numero);

if(numero > 0){
    console.log("Número Positivo. ");
}else{
    console.log("Número Negativo. ")
}
/*
NOme: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Soma dos primeiros N números naturais
Descrição: Pedir um número `N` ao usuário, e com esse número usar um `while` ou `for` para somar os números de `1` até `N`.
*/

let numeros = prompt("Digite um número: ");
numeros = parseInt(numeros);
let soma = 0;

for( let i = 1; i <= numeros; i++){
    resultado = (soma += i) 
    console.log(resultado)
}
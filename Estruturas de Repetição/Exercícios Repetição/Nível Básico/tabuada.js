/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Tabuada de um nÚmero
Descrição: Pede um número ao usuário e a tabudade desse número é exibida com um for.
*/

let numero = prompt("Digite um número:");
numero = parseInt(numero);

for( let i = 1; i <= 10; i++){
    resultado = numero * i;
    console.log(numero + "x" + i + "=" + resultado);
}

/*
Nome: Mariana Cordeiro
Data: 04/09/2025
Nome do Programa: Maior entre 3 números.
Descrição do Programa: O usuário insere os números e o programa verifca qual é o maior entre eles.
*/

let numeroA = prompt("Digite o Insira o número A: ");
let numeroB = prompt("Digite o Insira o número B: ");
let numeroC = prompt("Digite o Insira o número C: ");

numeroA = parseInt(numeroA);
numeroB = parseInt(numeroB);
numeroC = parseInt(numeroC);

if ( numeroA >= numeroB && numeroA >= numeroC){
    console.log("Número", numeroA , "é o maior.")
}

else if ( numeroB >= numeroC){
    console.log("Número", numeroB , "é o maior.")
}

else{
    console.log("Número", numeroC , "é o maior.")
}

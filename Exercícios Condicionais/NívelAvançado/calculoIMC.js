/*
Nome: Mariana Cordeiro
Data: 04/09/2025
Nome do Programa: Cálculo IMC.
Descrição do Programa: O usuário insere sua altura e seu peso classiicando-o como abaixo do peso, normal,sobrepeso ou obesidade.
*/

let altura = (prompt("Digite a sua altura em m: "));
let peso = (prompt("Digite seu peso em KG: "));

let IMC = peso/ altura **2

if (IMC < 18.5 ){
    console.log("Você está abaixo do peso.")
}
else if  (IMC >= 18.5 && IMC < 25) {
    console.log("Você está no peso normal")
}
else if(IMC >= 25 && IMC < 30 ){
    console.log("Você está com sobrepeso")
}
else {
    console.log("Você está obeso.")
}
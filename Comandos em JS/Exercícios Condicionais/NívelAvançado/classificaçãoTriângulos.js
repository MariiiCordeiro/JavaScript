/*
Nome: Mariana Cordeiro
Data: 04/09/2025
Nome do Programa: Classificação de Triàngulos
Descrição do Programa: O usuário insere 3 lados de um triângulo e classifica-lo de acordo os seus tipos.
*/

let ladoA = (prompt("Digite o lado A: "));
let ladoB = (prompt("Digite o lado B: "));
let ladoC = (prompt("Digite o lado C: "));

if(ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA){

   console.log("Não é um trilangulo")
} else if (ladoA==ladoB && ladoB==ladoC){
    console.log("Triângulo Equilátero.")
}
 else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
    console.log("Triângulo Isósceles.")
 }
 else{
    console.log("Triângulo Escaleno.")
 }


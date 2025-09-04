/*
Nome: Mariana Cordeiro
Data: 04/09/2025
Nome do Programa: Conversão de Notas para Conceitos.
Descrição do Programa: O usuário insere uma nota e converte-a para conceitos.
*/

let nota = (prompt("Digite a nota de 0 a 100: "));

if (nota >= 90) {
    console.log("Conceito A");
}
else if (nota >= 80 && nota < 89){
    console.log("Conceito B");
}
else if(nota >= 70 && nota < 79){
    console.log("Conceito C");
}
else if (nota >= 60 && nota < 69){
    console.log("Conceito D");
}
else{
    console.log("Conceito F");
}
/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Aprovação em Prova
Descrição: O usuário insere a nota de um aluno(0-100). Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".
*/

let nota = prompt("Digite a nota: ");
nota = parseInt(nota);

if (nota > 100 || nota < 0) {
    console.log("Nota inválida. ");
}
else if (nota >= 60) {
    console.log("Aprovado! ");
} else {
    console.log("Reprovado! ")
}
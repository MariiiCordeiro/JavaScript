/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Aprovação em Prova
Descrição: O usuário insere a sua idade e atraves de um `if-else` para verificar se ele é maior ou menor de idade.
*/

let idade = prompt("Digite a sua idade: ");
idade = parseInt(idade);

if (idade >= 18){
    console.log("Você é maior de idade. ");
} else{
    console.log("Você é menor de idade. ");
}
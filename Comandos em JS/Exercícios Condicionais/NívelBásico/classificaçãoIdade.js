/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Classificação Idade
Descrição: O usuário insere a sua idade e é exibido  se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).
*/

let idade = prompt("Digite a sua idade: ");
idade = parseInt(idade);

if (idade >= 18) {
    console.log("Você é adulto. ");
} else if (idade >= 13 ||idade < 17) {
    console.log("Você é adolescente. ")
} else {
    console.log("Você é criança. ")
}
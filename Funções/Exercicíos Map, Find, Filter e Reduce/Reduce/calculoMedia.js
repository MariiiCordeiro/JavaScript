/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Cálculo Média
Descrição: Dado o array const numeros = [1, 2, 3, 4, 5];, usa-se reduce para calcular a média.
*/

const numeros = [1, 2, 3, 4, 5]
const media = numeros.reduce((total, nota)=> total + nota, 0)/ numeros.length
console.log(media)
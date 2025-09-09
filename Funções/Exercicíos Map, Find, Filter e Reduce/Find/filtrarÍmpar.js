/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Filtrar Números Ímpares
Descrição: Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontra-se o primeiro número ímpar.
*/

const numeros = [2, 4, 6, 9, 12, 15];
const numerosImpares = numeros.find(numero=> numero %2)
console.log(numerosImpares)
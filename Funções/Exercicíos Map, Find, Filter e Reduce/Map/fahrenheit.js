/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Conversão Fahrenheit
Descrição: Dado o array const temperaturas = [20, 25, 30, 15];, cria-se um novo array convertendo para Fahrenheit (C * 1.8 + 32).
*/

const temperaturas = [20, 25, 30, 15]
const temperaturaF = temperaturas.map(temperatura => temperatura * 1.8 + 32)
console.log(temperaturaF)
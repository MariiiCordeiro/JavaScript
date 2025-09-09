/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Total de Compras
Descrição: Dado o array const valores = [100, 200, 50, 150];, calcula-se o total (como se fosse uma soma de compras).
*/

const valores = [100, 200, 50, 150]
const total = valores.reduce ((total, valor) => total + valor)
console.log(total)
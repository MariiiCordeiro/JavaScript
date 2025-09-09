/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Nomes em maiúsculo e prefixo "Produto: ".
Descrição: Dado o array const produtos = ["camisa", "calça", "sapato"];, cria-se um novo array com os nomes em maiúsculo e prefixo "Produto: ".
*/

const produtos = ["camisa", "calça", "sapato"]
const produtosMaiusculo = produtos.map(produtos => "Produto: " + produtos.toUpperCase())
console.log(produtosMaiusculo)
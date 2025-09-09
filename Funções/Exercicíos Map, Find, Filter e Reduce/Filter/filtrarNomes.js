/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Filtrar nomes 
Descrição: Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, é filtrado apenas as palavras com mais de 4 letras.
*/

const palavras = ["sol", "mar", "computador", "lua", "código"];
const palavrasMaiores = palavras.filter(palavras => palavras.length > 4)
console.log(palavrasMaiores)
/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Filtrar Animais 
Descrição: Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontra-se o primeiro filme que começa com a letra "B".
*/

const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];
const buscarFilme = filmes.find(filme => filme.startsWith("B"))
console.log(buscarFilme)
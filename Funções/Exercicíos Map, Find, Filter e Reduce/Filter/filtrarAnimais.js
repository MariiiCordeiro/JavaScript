/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Filtrar Animais 
Descrição: Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, é filtrado apenas os animais cujo nome começa com a letra "c". 
*/

const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];
const animaisC = animais.filter(animais => animais.startsWith("c"))
console.log(animaisC)
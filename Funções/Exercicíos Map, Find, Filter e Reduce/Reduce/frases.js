/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Frases
Descrição: Dado o array const palavras = ["JS", "é", "muito", "legal"];, usa-se reduce para juntar tudo em uma única frase.
*/

const palavras = ["JS", "é", "muito", "legal"]
const frase = palavras.reduce((acumulador, frase)=> acumulador + " " + frase)
 
console.log(frase)

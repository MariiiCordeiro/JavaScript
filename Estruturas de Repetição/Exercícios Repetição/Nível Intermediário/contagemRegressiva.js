/* 
Nome: Mariana Cordeiro
Data: 08/09/2025
Nome do Programa: Contagem Regressiva
Descrição: É pedido ao usuário um númeor e com esse número é exibido uma contagem regressiva até 0 usando um while.
*/

let numero = prompt("Digite um número: ");
numero = parseInt (numero);

while (numero != 0){
    numero--;
    console.log(numero);
}
/* 
Nome: Mariana Cordeiro
Data: 08/09/2025
Nome do Programa: Jogo de Adivinhação
Descrição: Um número aleatório é gerado de 1 a 100. O usuário deve adivinhar o número e será utilizado um while até ele acertar.
Enquanto ele não acertar será informado se o número sugerido pelo usuário é menor ou maior do que o número gerado.
*/

let numeroSecreto = (Math.random() * 100)+1;
numeroSecreto = parseInt(numeroSecreto);

let numeroUsuario = prompt("Digite o número: ");
numeroUsuario= parseInt(numeroUsuario);

do {
    numeroUsuario = parseInt(prompt("Digite o número: "));
    
    if (numeroUsuario < numeroSecreto) {
        console.log("Número menor que o gerado!");
    } else if (numeroUsuario > numeroSecreto) {
        console.log("Número maior que o gerado!");
    } else {
        console.log("Você acertou!");
    }
} while (numeroUsuario != numeroSecreto);

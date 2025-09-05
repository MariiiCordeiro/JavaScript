/*let nome = "James";
let idade = 17;

console.log("Olá meu nome é " + nome + ", tenho " + idade + " anos.");

let mensagem = `Olá, meu nome é ${nome}`;
// alert(messagem);

console.log(typeof mensagem);        // String
console.log(typeof idade);          // Number

let endereco = null;         
console.log(typeof endereco);      //objeto, intencional vazio


//* If e Else
let temperatura = 12;

if(temperatura > 25){
    console.log("Esta calor!");
}
else{
    console.log("Esta frio!");
}

let nomeUsuario = prompt("Digite seu nome: ");
alert("Seu nome é: " + nome);*/

//* If Else If Else
/*let nota = parseInt(prompt("Digite a nota: ")) //* Conversao de tipo de variaveis

if(nota > 6 ){
    console.log("Aprovado! ");
}
else if (nota >= 5){
    console.log("Está de recuperação! ");
}
else{
    console.log("Está reprovado! ");
}*/

//* If Ternario
/*let saldo = 90

let podeComprar = saldo >= 100 ? "Compra aprovada!" : "Compra reprovada, saldo insuficiente. "; //* Condicional + validacao se verdadeiro imprime a primiera mensagem : se falso imprime a segunda
console.log(podeComprar);*/

//*Condicional Aninhada = ninho. Multiplicas verificações */

/*let hora = 8;
let diadaSemana = "Terça";

if (hora >= 6 && hora < 12) {
    console.log("Bom dia! ");
} else {
    if (hora >= 12 && hora < 18) {
        if (diadaSemana == "Segunda") {
            console.log("Boa tarde! Ótima semana!");
        } else {
            console.log("Boa tarde!");
        }
    } else{
        console.log("Boa noite!");
    }
}*/

//* Switch Casa */
let dia = 2;

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terca-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido!");
        break;
}




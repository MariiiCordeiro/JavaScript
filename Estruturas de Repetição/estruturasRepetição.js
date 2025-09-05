//* FOR - Contando de  1 até N

//let n = parseInt(prompt("Digite um número: "));

/*for(let i = 1; i<=n; i++){      //*Valor inicial; condicao ; interador;
    console.log(i);
}

//* FOR - Contando de N até 1
let n = parseInt(prompt("Digite um número: "));

for(let i = n; i >= n; i--){      //*Valor inicial; condicao ; interador;
    console.log(i);
}*/

//* WHILE - Fazer uma soma

/*let soma = 0;
let i = 1;

while(i <= 10){
    soma +=i; //* Equivalente a soma = soma + i
    console.log("O resultado atual é:" + soma);
    i++
}

console.log("A soma total dos 10 números é: ");


//* DO WHILE - Executa primeiro e depois valida a funcao

/*let numero = 1;

do {
    console.log("Numero: "+ numero);
} while(numero <= 5)*/

//* FOREACH - Percorre um array 

let numeros = [1, 2, 3, 4, 5];

numeros.forEach( function(numero){
    console.log("Numero: " + numero)
})

let frutas =  ["Uva", "Banana", "Laranja", "Figo"];
frutas.forEach(function(frutas){
    console.log(frutas);
})

for(let i = 0; i< numeros.length; i++){
    console.log("Numero: " + numeros[i])
}

/*
Nome: Mariana Cordeiro
Data: 04/09/2025
Nome do Programa: Calculadora Simples.
Descrição do Programa: O usuário insere os números e os operadores matemáticos, calculando o resultado e exibindo-o.
*/

 let numeroA = (prompt("Insira o número A: "));
 let numeroB = (prompt("Insira o número B: "));
 let operador = (prompt("Insira o operador: "))

  numeroA = parseInt(numeroA);
  numeroB = parseInt(numeroB);

  if(operador == "+"){
    resultado = numeroA + numeroB;
    console.log(numeroA, "+" , numeroB, "=");
    console.log(resultado);
  }
  if(operador == "-"){
    resultado = numeroA - numeroB;
    console.log(numeroA, "-" , numeroB, "=");
    console.log(resultado);
  }

  if(operador == "*"){
    resultado = numeroA * numeroB;
    console.log(numeroA, "*" , numeroB, "=");
    console.log(resultado);
  }

  if(operador == "/"){
    resultado = numeroA / numeroB;
    console.log(numeroA, "/" , numeroB, "=");
    console.log(resultado);
  }

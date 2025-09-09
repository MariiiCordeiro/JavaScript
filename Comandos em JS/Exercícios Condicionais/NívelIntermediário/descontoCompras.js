/*
Nome: Mariana Cordeiro
Data: 05/09/2025
Nome do Programa: Desconto em compras
Descrição: O usuário insere o valor da compra se o valor da compra for maior que R$ 100, aplique 10% de desconto.
Caso contrário é exibido o valor normal.
*/

let valorCompra = prompt("Digite o valor da compra: ")
valorCompra = parseFloat(valorCompra)

if (valorCompra > 100) {
    console.log("A sua compra tera um desconto de: R$" + valorCompra * 0.1 + "Valor a pagar: R$" + valorCompra * 0.9)
}else{
    console.log("Nenhum desconto disponível. Valor a pagar: R$" + valorCompra)
}

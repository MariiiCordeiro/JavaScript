/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Desafio 2
Descrição: Use `map` para criar uma lista de strings no formato `"Produto: X - R$ Y"`.
           Use `reduce` para calcular o valor total da compra.
           Use `find` para encontrar o produto chamado `"Mouse"`.
*/

const carrinho = [
    { produto: "Notebook", preco: 2500 },
    { produto: "Mouse", preco: 100 },
    { produto: "Teclado", preco: 200 }
  ]

  const lista = carrinho.map(produtos => `Produto: ${produtos.produto} -  R$ ${produtos.preco} `)
  console.log(lista)

  const totalCompra = carrinho.reduce((total,carrinho)=> total + carrinho.preco,0)
  console.log(totalCompra)

  const buscarProduto = carrinho.find(produto => produto.produto.startsWith("M"))
  console.log(buscarProduto)
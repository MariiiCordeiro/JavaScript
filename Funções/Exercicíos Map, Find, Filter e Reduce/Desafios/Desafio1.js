/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Desafio 1
Descrição: Filtra-se apenas os livros com mais de 200 páginas.
           Cria-se um array apenas com os títulos.
           Calcula-se o total de páginas de todos os livros.
*/

const livros = [
    { titulo: "Dom Casmurro", paginas: 300 },
    { titulo: "O Hobbit", paginas: 295 },
    { titulo: "A Revolução dos Bichos", paginas: 112 }
  ]

  const livrosFiltrados = livros.filter(livros => livros.paginas > 200)
  console.log(livrosFiltrados)

  const titulos = livros.map(livros => livros.titulo)
  console.log(titulos)

  const total = livros.reduce((total,livros)=> total + livros.paginas, 0)
  console.log(total)
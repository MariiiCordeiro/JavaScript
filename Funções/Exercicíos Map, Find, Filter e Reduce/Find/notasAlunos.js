/*
Nome: Mariana Cordeiro
Data: 09/09/2025
Nome do Programa: Filtrar Notas do Alunos
Descrição: Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, encontra-se o primeiro aluno com nota maior ou igual a 7.
*/

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Beatriz", nota: 9 }
];
const notasAlunos = alunos.find(alunos => alunos.nota >= 7 )
console.log(notasAlunos)
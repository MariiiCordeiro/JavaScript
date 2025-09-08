//* FILTER - Filtrar números
//* Exemplo - Filtrar números maiores que 2

/*const numeros = [1, 2, 3, 4, 5, 6];

const maioresQueDois =  numeros.filter(numero => numero > 2); //* => Equivalente a function
console.log(maioresQueDois);

//* FILTRAR - Nomes
let nomes = ["Ana", "Bruno","Carlos","Eva","Fernanda"];
let nomesLongos = nomes.filter(nome => nome.lenght > 5);
console.log(nomesLongos);

//*FILTRAR - Números Pares

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

//*FILTRAR - Objetos
let pessoas = [
    {nome : "Lucas", idade: 17},
    {nome : "Mariana", idade: 22},
    {nome : "Ana Catarina", idade: 15},
    {nome : "Juliana", idade: 30}
]
 let adultos = pessoas.filter(pessoa => pessoa.idade >= 18)
 console.log(adultos)

//*FIND - Retorna somente o primeiro elemento da lista correspondente a condição
//* Exemplo - Procurar um produto pelo preço

const produtos = [

    {id: 1, nome: "Teclado", preco: 800},
    {id: 2, nome: "Mouse", preco: 50},
    {id: 3, nome: "Monior", preco: 700}
]

const produtoCaro = produtos.find(produto => produto.preco > 600);
console.log(produtoCaro);

//* FIND - Numeros maior que 10
let numeros = [5, 8, 12, 20, 3, 15];
let encontrado = numeros.find(numero => numero > 10)
console.log(encontrado)

//* FIND - Buscar nome pela primeira  letra
let nomes = ["Ana", "Bruno","Carlos","Eva","Fernanda"];
let nomeEncontrado = nomes.find(nome => nome.startsWith("C"));

console.log(nomeEncontrado);

//* MAP - 
//* Exemplo - Multiplicar todos os numeros por 2
const numeros = [1, 2, 3, 4, 5];

const numerosDobrados =  numeros.map(numero => numero * 2);

//* MAP - Criando um array a partir de um objeto

let pessoas = [
    {nome : "Lucas", idade: 17},
    {nome : "Mariana", idade: 22},
    {nome : "Ana Catarina", idade: 15},
    {nome : "Juliana", idade: 30}
]
let nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes)

let menssagem = pessoas.map(pessoas =>  `${pessoa.nome} tem ${pessoa.idade} anos.`)

console.log(menssagem);

//* MAP - Deixar os nomes em maiusculos e adicionar um sufixo


const nome = ["ana", "bruno", "carla"];

const nomesMaiusculo = nomes.map(nome => "Colaborador" + nome.toUpperCase());
console.log(nomesMaiusculo);

//* REDUCE - Reduz um array a um unico valor
//* Exemplo - Somar todos os numeros do array.
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0); //* reduce(acumulador,auxiliar)
console.log(soma);*/

//* REDUCE - Verificar o maior numero do array
const numeros = [10, 5, 8, 20, 3]

const maiorNumero = numeros.reduce((max, numero) =>
{
    if(numero > max){
        return numero;
    } else {
        return max;
    }
}, numeros[0]
);
console.log(maiorNumero);



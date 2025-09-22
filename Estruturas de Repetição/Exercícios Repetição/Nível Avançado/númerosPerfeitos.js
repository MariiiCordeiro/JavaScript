let numero_max = parseInt(prompt("Digite um número: "))

for (let numero_testado = 1; numero_testado <= numero_max; numero_testado++) //Testa um por um qual é perfeiro
{
    let somaDivisores = 0;

    for (let divisor_testado = 1; divisor_testado < numero_testado; divisor_testado++) // Testa os divisores
    {
        if (numero_testado % divisor_testado == 0) //verifica se é divisor
        {
            somaDivisores += divisor_testado;
        }

    }

    if (somaDivisores == numero_testado) //verificação do numero perfeito
    {
        console.log(numero_testado + " é um numero perfeito")
    }
}
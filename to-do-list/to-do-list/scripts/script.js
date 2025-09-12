//* Variável para armazenar o form
const elForm = document.getElementById('form-tarefa')

//* Variável para armazenar o títilo da terefa (input)
const elTitulo = document.querySelector('#titulo')

//* Variável para armazenar o filtro de status
const elFiltroStatus = document.querySelector('#filtro-status')

//* Variável para armazenar o filtro de busca
const elFiltroBusca = document.querySelector('#filtro-busca')

//* Variável para armazenar a lista
const elLista = document.querySelector('#lista-tarefas')

//* Variável para armazenar texto que aparece quando a lista está vazia
const elVazio = document.querySelector("#vazio")

//* Lista de tarefas inicial
let tarefas = [
    { id: 1, titulo: "Estudar DOM", status: "Pendente" },
    { id: 2, titulo: "Criar To-Do List", status: "Andamento" },
    { id: 3, titulo: "Praticar JavaScript", status: "Concluido" }
]

//* Adiciona um "ouvinte" para o evento de submit do forumulário
elForm.addEventListener('submit', function (e) {
    //* Letra "e" na função: e uma referencia ao objeto de evento que o navaegador cria sempre qeu algo acontece.

    //* Impede o comportamento padrao do formulário (recarregar a página).
    e.preventDefault()

    //*Pega o valor(value) digitado no input(elTitulo), removendo espacos
    const titulo = elTitulo.value.trim()

    //* Se o titulo estiver vazio
    if (!titulo) return

    //* Cria um objeto representando a nova tarefa
    //* - id: o número do timestamp atual
    //* - titulo: recebe o valor digitado pelo usuário
    //* - status: começa sempre como "pendente"
    const nova = { id: Date.now(), titulo: titulo, status: "pendente" }

    tarefas.push(nova)

    //* Limpa o campo de texto do input
    elTitulo.value = ""

    //* Chama a funcao render () para atualizar a lista de tarefas exibida na tela
    render()
})

//* Renderizar a lista
function render() {
    //* Termo digitado no filtro de buscar - deixar em minusculo
    const termo = elFiltroBusca.value.toLowerCase()

    //* Valor selecionado no filtro de status
    const filtro = elFiltroStatus.value

    //* Aplicca filtros de status e busca
    const filtradas = tarefas.filter(function (t) {
        //* Se o filtro for "todas",  aceita qualquer status se não compara com t.status
        const okStatus = filtro === "todas" ? true : t.status === filtro

        //* Se houver termo, verfica se o titulo contem esse termo
        //* Se o usuario digitar algo, so aceita a tarefa se for igual ao que usuario digitou.
        //* Se o usuraio nao digitar nada, retorna a lista completa (true).
        const okBusca = termo ? t.titulo.toLocaleLowerCase().includes(termo) : true

        return okStatus && okBusca
    })

    //* Limpara a lista antes de redesenhar
    elLista.innerHTML = ""

    //* Cria os elementos da lista para cada tarefa filtrada
    filtradas.forEach(function (t) {
        const li = document.createElement('li')
        //* class = "tarefa concluida/pendente/andamento"
        li.className = "tarefa " + t.status
        li.dataset.id = t.id

        //* Titulo da tarefa
        const h3 = document.createElement('h3')
        h3.textContent = t.titulo

        //* Caixinha de acoes (ira aramazenar um checkbox, select, botao remove)
        const acoes = document.createElement('div')
        acoes.className = "acao"

        //* Checkbox: concluida ou pendente
        const check = document.createElement('input')
        check.type = "checkbox"
        check.checked = t.status === "concluida"

        //* Ao mudar o check redesenha na tela
        check.addEventListener('change', function () {
            t.status = check.checked ? "concluida" : "pendente"
            render()
        })

        //* Select de status: pendente, andamento, concluida
        const select = document.createElement('select')
        const listaSelect = ["pendente", "andamento", "concluida"]

        listaSelect.forEach(function (status) {
            const option = document.createElement('option')
            option.value = status

            //* Capitalizar a primeira letra de cada palavra
            option.textContent = status.charAt(0).toUpperCase() + status.slice(1)                            //* Colocar letras em maiusculo.

            if (t.status === status) option.selected = true
            select.appendChild(option)
        })

        //* Ao mudar o select, atualiza-se a tela
        select.addEventListener('change', function () {
            t.status = select.value
            render()
        })

        //* Botão remover - retira a tarefa e redesenha a tela
        const botao = document.createElement('button')
        botao.textContent = 'X'
        botao.className = "remover"

        //* Recebe o evento de click e filtra uma nova lista
        botao.addEventListener('click', function () {
            tarefas = tarefas.filter(apagar => apagar.id !== t.id)
            render()
        })

        acoes.appendChild(check)
        acoes.appendChild(select)
        acoes.appendChild(botao)

        //* Adicionando os filtros do li
        li.appendChild(h3)
        li.appendChild(acoes)

        //* Adicionando os filtros do ul (#id: lista tarefas - variavel)
        elLista.appendChild(li)
    })


    //* Texto aparece somento se o array de filtradas existir algo
    //* Caso ao contrário, recebe display: none (some da tela)
    elVazio.style.display = filtradas.length ? "none" : "block"
}

//* Filtrar
//* Quando o usuario mudar a opcao de filtro por status
elFiltroStatus.addEventListener('change', render)          //* Sem parenteses, pois assim nao sera chamado imediatamnete

//* Quando o usuraio digitar algo no campo de busca
elFiltroBusca.addEventListener('input', render)

//* Primeira renderizacao - atulizacao de informacoes que serao exibidas
render()
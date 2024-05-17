
const aulas = [
    {
        identificador: 1,
        nome_da_aula: "Introdução a programação"
    },
    {
        identificador: 2,
        nome_da_aula: "Variáveis"
    },
    {
        identificador: 3,
        nome_da_aula: "Condicionais"
    },
    {
        identificador: 4,
        nome_da_aula: "Arrays"
    }
]
const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas
}

let adicionarAula = ({
    identificador : aulas.length +1,
    nome_da_aula: "teste de push"
})

aulas.push(adicionarAula)
console.log(curso);
function calcularMediaAtleta(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        // slice copia o array original e o sort ordena os valores
        const notasOrdenadas = atletas[i].notas.slice().sort((a, b) => a - b)

        // remove a menor e a maior nota
        const notasValidas = notasOrdenadas.slice(1, 4)

        // soma das notas válidas
        const soma = notasValidas.reduce((total, nota) => total + nota, 0)

        // cálculo da média
        const media = soma / notasValidas.length

        // exibição do resultado
        console.log(`Atleta: ${atletas[i].nome}`)
        console.log(`Notas: ${atletas[i].notas.join(', ')}`)
        console.log(`Média: ${media.toFixed(2)}`)
        console.log('-----------------------')
    }
}
const atletas = [
    { nome: 'Joaozinho', notas: [8, 8, 9, 7, 6] },
    { nome: 'Mariazinha', notas: [5, 8, 7, 8, 7] },
    { nome: 'Pedrinho', notas: [6, 6, 8, 9, 7] },
]

calcularMediaAtleta(atletas)
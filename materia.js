const notasMateria = [10, 8, 10, 9]

const materia = {
    calcMedia(notas) {
        let resultado = ''
        let media = notas.reduce((a, b) => a + b, 0) / notasMateria.length
        if (media >= 7) 
            resultado = 'aprovado'
        else if (media < 7)
            resultado = 'reprovado'
        return resultado
    }
}

console.log(materia.calcMedia(notasMateria))





module.exports = materia
const materia = require('./materia')

describe('Testes para as notas', () => {
    it('Deve retornar reprovado quando a média for menor que 7', () => {
        const notas = [3, 2, 5, 4]
        expect(materia.calcMedia(notas)).toEqual('reprovado')
    })
    
     it('Deve retornar aprovado quando a média for maior que 7', () => {
        const notas = [10, 8, 10, 9]
        expect(materia.calcMedia(notas)).toEqual('aprovado')
    } )
})
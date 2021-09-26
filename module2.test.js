const modulo2 = require('./modulo2')

describe('funcao que concatena uma string junto ao valor passado', () => {
    it('Deve retornar um valor alterado', () => {
        expect(modulo2.rename('valor teste')).toBe('valor teste valor renomeado')
    } )
})
const modulo1 = require('./modulo1')

describe('basic feature', () => {
    it('Deve Retornar um valor', () => {
        expect(modulo1.func1(10)).toBe(11)
    })
})

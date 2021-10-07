import thaiTime from './thaiTime'

jest.autoMockOff()
describe('thaiTime Success', () => {
    test('4AM', () => {
        expect(thaiTime(new Date('Thu, 07 Oct 2021 11:00:00 GMT'))).toBe('18:00')
    })
})


import thaiTime from './thaiTime'

jest.autoMockOff()
describe('Expected Success', () => {

    test('18:00', () => {
        expect(thaiTime(new Date('Thu, 07 Oct 2021 11:00:00 GMT'))).toBe('18:00')
    })

})
describe('Expected Fail', () => {
    test('Invalid Date', () => {
        expect(thaiTime(new Date('invalid Date'))).toBe('Invalid Date')
    })
})


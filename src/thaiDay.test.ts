import thaiDay from './thaiDay'


jest.autoMockOff()
describe('Expected Success', () => {
    test('Mon', () => {
        expect(thaiDay(new Date('Mon, 04 Oct 2021 11:00:00 GMT'))).toBe('จันทร์')
    })
    test('Tue', () => {
        expect(thaiDay(new Date('Tue, 05 Oct 2021 11:00:00 GMT'))).toBe('อังคาร')
    })
    test('Wed', () => {
        expect(thaiDay(new Date('Wed, 06 Oct 2021 11:00:00 GMT'))).toBe('พุธ')
    })
    test('Thurs', () => {
        expect(thaiDay(new Date('Thu, 07 Oct 2021 11:00:00 GMT'))).toBe('พฤหัสบดี')
    })
    test('Fri', () => {
        expect(thaiDay(new Date('Fri, 08 Oct 2021 11:00:00 GMT'))).toBe('ศุกร์')
    })
    test('Sat', () => {
        expect(thaiDay(new Date('Sat, 09 Oct 2021 11:00:00 GMT'))).toBe('เสาร์')
    })
    test('Sun', () => {
        expect(thaiDay(new Date('Sun, 10 Oct 2021 11:00:00 GMT'))).toBe('อาทิตย์')
    })
})

describe('Expected Fail', () => {
    test('Invalid Date', () => {
        expect(thaiDay(new Date('invalid Date'))).toBe('Invalid Date')
    })
})


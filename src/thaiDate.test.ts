import thaiDate from './thaiDate'
import thaiTime from "./thaiTime";


jest.autoMockOff()
describe('Expected Success', () => {
    test('07/10/2564', () => {
        expect(thaiDate(new Date('Thu, 07 Oct 2021 11:00:00 GMT'))).toBe('07/10/2564')
    })
})

describe('Expected Fail', () => {
    test('Invalid Date', () => {
        expect(thaiTime(new Date('invalid Date'))).toBe('Invalid Date')
    })
})


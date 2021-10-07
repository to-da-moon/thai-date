import thaiDate from './thaiDate'


jest.autoMockOff()
describe('dateString', () => {
    test('dateString', () => {
        expect(thaiDate(new Date('Thu, 07 Oct 2021 11:00:00 GMT'))).toBe('07/10/2564')
    })
})

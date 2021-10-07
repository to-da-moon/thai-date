
import dayjs from 'dayjs'
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.locale('th-TH')
dayjs.extend(buddhistEra)

const thaiTime = (date: Date) => {
    if (!date) {
        date = new Date()
        return dayjs(date).format('TT:MM')

    }
}
const thaiDate = (date: Date) => {
    if (!date) {
        date = new Date()
    }

    return dayjs(date).format('DD/MM/BBBB')
}
export {thaiDate,thaiTime}
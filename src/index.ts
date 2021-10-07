import dayjs from 'dayjs'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import thaiDate from './thaiDate'
import thaiTime from './thaiTime'

dayjs.locale('th-TH')
dayjs.extend(buddhistEra)



export {thaiDate,thaiTime}

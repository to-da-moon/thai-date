import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(buddhistEra)
dayjs.extend(utc)
dayjs.extend(timezone)
const thaiDate = (date: Date) => {
  if (!date) {
    date = new Date()
  }
  return dayjs(date).tz('Asia/Bangkok').locale('th-TH').format('DD/MM/BBBB')
}

export default thaiDate

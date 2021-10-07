import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra)

const thaiDate = (date: Date) => {
  if (!date) {
    date = new Date()
  }

  return dayjs(date).locale('th-TH').format('DD/MM/BBBB')
}

export default thaiDate

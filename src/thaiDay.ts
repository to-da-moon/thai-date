import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc)
dayjs.extend(timezone)
const thaiTime = (date: Date) => {
  if (!date) {
    date = new Date()
  }
  switch(dayjs(date).tz('Asia/Bangkok').day()){
    case 1:
      return 'จันทร์'

    case 2:
      return 'อังคาร'

    case 3:
      return 'พุธ'

    case 4:
      return 'พฤหัสบดี'

    case 5:
      return 'ศุกร์'

    case 6:
      return 'เสาร์'

    case 0:
      return 'อาทิตย์'
  }
  return 'Invalid Date'

}

export default thaiTime

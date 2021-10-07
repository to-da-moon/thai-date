import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc)
dayjs.extend(timezone)
const thaiTime = (date: Date) => {
  if (!date) {
    date = new Date()
  }
  return dayjs(date).tz('Asia/Bangkok').format('HH:mm')
}

export default thaiTime

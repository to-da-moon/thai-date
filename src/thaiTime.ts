import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc)
dayjs.extend(timezone)
const thaiTime = (date: Date, options?:{format: string}) => {
  if (!date) {
    date = new Date()
  }
  return dayjs(date).tz('Asia/Bangkok').format(options?.format || 'HH:mm')
}

export default thaiTime

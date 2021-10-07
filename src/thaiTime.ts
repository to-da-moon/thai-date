import dayjs from "dayjs";

const thaiTime = (date: Date) => {
  if (!date) {
    date = new Date()
    return dayjs(date).format('TT:MM')

  }
}

export default thaiTime

import dayjs from "dayjs";

const thaiDate = (date: Date) => {
  if (!date) {
    date = new Date()
  }

  return dayjs(date).format('DD/MM/BBBB')
}

export default thaiDate

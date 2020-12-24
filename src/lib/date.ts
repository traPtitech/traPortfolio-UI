export const getTimeString = (date: Date): string =>
  date.getHours().toString().padStart(2, '0') +
  ':' +
  date.getMinutes().toString().padStart(2, '0')

export const getDayString = (date: Date): string =>
  (date.getMonth() + 1).toString().padStart(2, '0') +
  '/' +
  date.getDate().toString().padStart(2, '0')

export const getFullDayString = (date: Date): string =>
  date.getFullYear() + '/' + getDayString(date)

export const getFullDayWithTimeString = (date: Date): string =>
  getFullDayString(date) + ' ' + getTimeString(date)

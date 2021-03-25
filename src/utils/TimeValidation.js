import moment from 'moment'
import { ConvertDate } from './ConvertDate'

export const HOUR_MINUTE_SECONDS_MASK = 'HH:mm:ss'

export const isSameTime = (startTime, endTime) =>
  moment(startTime, HOUR_MINUTE_SECONDS_MASK).isSame(endTime)
export const isBeforeTime = (startTime, endTime) =>
  moment(startTime, HOUR_MINUTE_SECONDS_MASK).isBefore(endTime)
export const isAfterTime = (startTime, endTime) =>
  moment(startTime, HOUR_MINUTE_SECONDS_MASK).isAfter(endTime)
export const isSameOrBeforeTime = (startTime, endTime) =>
  moment(startTime, HOUR_MINUTE_SECONDS_MASK).isSameOrBefore(endTime)
// export const isSameOrAfterTime = (startTime, endTime) =>
//   moment(startTime, HOUR_MINUTE_SECONDS_MASK).isSameOrAfter(endTime);

export const isSameOrBefore = (startTime, endTime) => {
  // console.log(moment(startTime, "HH:mm").isBefore(moment(endTime, "HH:mm")));
  return moment(startTime, 'HH:mm').isBefore(moment(endTime, 'HH:mm'))
}

export const isAfterTimeTest = (startTime, endTime) => {
  // console.log(moment(startTime, "HH:mm").isBefore(moment(endTime, "HH:mm")));
  return moment(startTime, 'HH:mm').isAfter(moment(endTime, 'HH:mm'))
}

export const isSameOrBeforeDay = (startDay, endDay) => {
  return moment(startDay).isBefore(moment(endDay))
}

export const isAfterDay = startDay => {
  return moment(startDay).isAfter(moment(ConvertDate(new Date())))
}

export const isAfterDayMinOne = startDay => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  return moment(startDay).isAfter(moment(ConvertDate(date)))
}

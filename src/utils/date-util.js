// import { addYears, setSeconds, setMinutes, setHours } from 'date-fns'
import moment from 'moment'

export function currentTimestamp () {
  return Math.round(Date.now() / 1000)
}

export function currentTimestampMilisencond () {
  return Date.now()
}

export function timestampByYears (date, years) {
  // const result = addYears(date, years)
  // return Math.round(result.getTime() / 1000)
  debugger
  return Math.round(moment(date).add(years, 'years').valueOf() / 1000)
}

// export function clearTime (date) {
//   let newDate = date
//   newDate = setSeconds(newDate, 0)
//   newDate = setMinutes(newDate, 0)
//   newDate = setHours(newDate, 0)
//   return newDate
// }

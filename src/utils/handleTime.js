import moment from 'moment'

export const handleDuration = (duration, unit = 'ms') => {
  const time = moment.duration(duration, unit)
  const hour = time.hours()
  const minute = time.minutes()
  const second = time.seconds()
  return `${hour > 0 ? (hour + ':') : ''}${minute >= 10 ? minute : ('0' + minute)}:${second >= 10 ? second : ('0' + second)}`
}

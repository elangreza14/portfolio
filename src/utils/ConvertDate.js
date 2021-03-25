import moment from 'moment'

export const ConvertDate = e => {
  return moment(e).format('YYYY-MM-DD')
}

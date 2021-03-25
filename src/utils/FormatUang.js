export const FormatUang = number =>
  new Intl.NumberFormat(['ban', 'id']).format(number)

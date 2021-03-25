export const PaginationNumber = page => {
  let tab = []
  for (let i = 0; i < page; i++) {
    tab.push(i + 1)
  }
  return tab
}

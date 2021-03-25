export const GetSortOrder = prop => {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1
    } else if (a[prop] < b[prop]) {
      return -1
    }
    return 0
  }
}
export const GetSort = prop => {
  return function (a, b) {
    if (a[prop] < b[prop]) {
      return 1
    } else if (a[prop] > b[prop]) {
      return -1
    }
    return 0
  }
}
export const GetSortName = (prop, prop2) => {
  return function (a, b) {
    if (a[prop][prop2] > b[prop][prop2]) {
      return 1
    } else if (a[prop][prop2] < b[prop][prop2]) {
      return -1
    }
    return 0
  }
}
export const GetSortNameZa = (prop, prop2) => {
  return function (a, b) {
    if (a[prop][prop2] < b[prop][prop2]) {
      return 1
    } else if (a[prop][prop2] > b[prop][prop2]) {
      return -1
    }
    return 0
  }
}

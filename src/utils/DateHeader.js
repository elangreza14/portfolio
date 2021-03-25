import { toInteger } from 'lodash'
const _ = require('lodash')

export const RangeWeekAll = {
  1: { start: 1, end: 7 },
  2: { start: 8, end: 14 },
  3: { start: 15, end: 21 },
  4: { start: 22, end: 28 },
  5: { start: 29, end: 35 }
}

export const DateHeader = (test, no_name) => {
  // //console.log("test disi", test);
  const a = test.split('-')
  var yyyy = a[0]
  var mm = a[1]
  var dd = a[2]
  var convert = parseInt(dd)
  const lastDate = new Date(yyyy, mm, 0).getDate()
  let tahun = 0
  let bulan = 0
  let angka = 1
  var base = [{ id: 0, name: 'Shift Time', min: 150 }]
  var cars = []
  for (let index = 0; index <= 6; index++) {
    if (mm === 12 && lastDate === convert + index) {
      cars.push({
        id: index + 1,
        name: `${toInteger(yyyy) + 1}-1-${lastDate}`,
        min: 150
      })
      tahun += yyyy + 1
      bulan = 1
    } else if (tahun !== 0) {
      cars.push({
        id: index + 1,
        name: `${toInteger(yyyy) + 1}-01-${angka}`,
        min: 150
      })
      angka += 1
    } else if (bulan !== 0) {
      cars.push({
        id: index + 1,
        name: `${toInteger(yyyy) + 1}-01-${angka}`,
        min: 150
      })
    } else if (convert + index > lastDate) {
      cars.push({
        id: index + 1,
        name: `${yyyy}-${toInteger(mm) + 1}-${angka}`,
        min: 150
      })
      angka += 1
    } else {
      cars.push({
        id: index + 1,
        name: `${yyyy}-${mm}-${toInteger(convert) + index}`,
        min: 150
      })
    }
  }
  cars.forEach(element => {
    const spitDate = element.name.split('-')
    if (toInteger(spitDate[2]) < 10) {
      const resultEnd = `${spitDate[0]}-${spitDate[1]}-0${spitDate[2]}`
      element.name = resultEnd
    }
  })

  cars.forEach(element => {
    const spitDate = element.name.split('-')
    if (toInteger(spitDate[1]) === 13) {
      const resultEnd = `${toInteger(spitDate[0]) + 1}-01-${spitDate[2]}`
      element.name = resultEnd
    }
  })

  cars.forEach(element => {
    const spitDate = element.name.split('-')
    if (toInteger(spitDate[1]) > mm && toInteger(spitDate[1]) < 10) {
      const resultEnd = `${spitDate[0]}-0${spitDate[1]}-${spitDate[2]}`
      element.name = resultEnd
    }
  })
  cars = no_name ? cars : _.concat(base, cars)
  // //console.log(cars);
  return cars
}

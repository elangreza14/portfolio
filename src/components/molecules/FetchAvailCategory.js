import BaseApi from '../../baseApi/BaseApi'

export async function FetchAvailCategory(auth, searchval) {
  try {
    const test2 = await BaseApi('driver').get(`category/parent/${searchval}`, {
      headers: {
        Authorization: auth.token
      }
    })
    let c = []
    c.push({ value: '', key: 'Choose One' })
    test2?.data?.data.forEach(x => {
      c.push({
        value: x.id,
        key: x.category
      })
    })
    return c
  } catch (err) {
    return [{ value: '', key: 'Choose One' }]
  }
}

import AES256 from 'aes-everywhere'

export const EncripParse = (data, key) => {
  const encrypdata = AES256.encrypt(JSON.stringify(data), key)
  //console.log(encrypdata)
  return encrypdata
}

export const DecripParse = (data, key) => {
  const decrypted = AES256.decrypt(data, key)
  const parsed = JSON.parse(decrypted)
  return parsed
}

export const DecripParseProm = (data, key) => {
  let myFirstPromise = new Promise(resolve => {
    const decrypted = AES256.decrypt(data, key)
    resolve(JSON.parse(decrypted))
  })
  return myFirstPromise
}

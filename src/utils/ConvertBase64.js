import Resizer from 'react-image-file-resizer'

export const ConvertBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

export const resizeFile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      500,
      500,
      'JPEG',
      100,
      0,
      uri => {
        resolve(uri)
      },
      'base64'
    )
  })

// import axios from 'axios'

const BaseApi = srv => {
  // const prod = process.env.NODE_ENV === 'production'
  return true
  // return srv === true
  //   ? axios.create({
  //       baseURL:
  //         prod === true
  //           ? process.env.NEXT_PUBLIC_BASE_API_URL
  //           : process.env.NEXT_PUBLIC_BASE_API_URL,
  //       timeout: 30000
  //     })
  //   : axios.create({
  //       baseURL:
  //         prod === true
  //           ? process.env.NEXT_PUBLIC_BASE_API_URL
  //           : process.env.NEXT_PUBLIC_BASE_API_URL,
  //       timeout: 30000
  //     })
}

export default BaseApi

import { useEffect, useReducer } from 'react'
import BaseApi from '../baseApi/BaseApi'
import { FetchingReducer, initialStateFetch } from '../reducers'
import { useAuthContext } from '../context/AuthContextProvider'

export const useFetchGet = (baseCond, url, trigger) => {
  const [state, dispatch] = useReducer(FetchingReducer, initialStateFetch)
  const { auth } = useAuthContext()

  useEffect(() => {
    let cancelRequest = false
    if (!auth.token) return
    const fetchData = async () => {
      dispatch({ type: 'FETCHING' })
      BaseApi(baseCond)
        .get(url, {
          headers: {
            Authorization: auth.token
          }
        })
        .then(res => {
          if (cancelRequest) return
          // console.log('dari hooks', res.data)
          if (res.data.code === 200) {
            dispatch({
              type: 'FETCHED',
              payload: res.data.data,
              code: res.data.code,
              totalPage: res.data.totalPage,
              totalData: res.data.total_data
            })
            if (res.data.data.message) {
              dispatch({
                type: 'MESAGEDETAIL',
                messageDetail: res.data.msg
              })
            }
          } else {
            dispatch({
              type: 'FETCH_ERROR',
              payload: res.data.msg,
              code: res.data.code
            })
            // dispatch({
            //   type: 'MESAGEDETAIL',
            //   messageDetail: res.data.msg
            // })
          }

          if (res.data.msg) {
            dispatch({
              type: 'MESAGEDETAIL',
              messageDetail: res.data.msg
            })
          }
        })
        .catch(e => {
          if (cancelRequest) return
          if (e.response) {
            dispatch({
              type: 'MESAGEDETAIL',
              messageDetail: e.response.data.msg
            })
          }
          if (e.response) {
            dispatch({
              type: 'FETCH_ERROR',
              payload: e.message,
              code: e.response.status
            })
          } else {
            dispatch({
              type: 'FETCH_ERROR',
              payload: e.message,
              code: e.message
            })
          }
        })
    }

    fetchData()
    return function cleanup() {
      cancelRequest = true
    }
  }, [baseCond, url, trigger, auth])

  return state
}

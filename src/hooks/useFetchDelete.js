import { useEffect, useReducer } from 'react'
import { FetchingReducer, initialStateFetch } from '../reducers/FetchingReducer'
import BaseApi from '../baseApi/BaseApi'
import { useAuthContext } from '../context/AuthContextProvider'

export const useFetchDelete = (baseCond, url, data, trigger) => {
  const [state, dispatch] = useReducer(FetchingReducer, initialStateFetch)
  const { auth } = useAuthContext()

  useEffect(() => {
    let cancelRequest = false
    if (!data) return
    if (!url) return
    if (!auth.token) return

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' })
      BaseApi(baseCond)
        .delete(url, {
          headers: {
            Authorization: auth.token
          },
          data
        })
        .then(res => {
          if (cancelRequest) return
          if (res.data.code === 200) {
            dispatch({
              type: 'FETCHED',
              payload: res.data.data,
              code: res.data.code,
              totalPage: res.data.totalPage,
              totalData: res.data.totalData
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
  }, [baseCond, url, data, trigger, auth])

  return state
}

// import { useCallback } from 'react'
// import { useCookies } from 'react-cookie'
// import { useCallback, useEffect } from 'react'
import { useAuthContext } from '../context/AuthContextProvider'

export const useAuth = () => {
  const { auth, logout, loading } = useAuthContext()
  // const [removeCookie] = useCookies(['user'])
  // const { dispatchAuth } = useAuthContext()

  // const logoutx = useCallback(() => {
  //   dispatchAuth({ type: 'LOGOUT' })
  //   removeCookie('user', { path: '/' })
  // }, [dispatchAuth, removeCookie])

  // useEffect(() => {
  //   const now = Date.now()
  //   if (auth.isLoggedIn && auth.userId !== null && now > auth.timeout) {
  //     logoutx()
  //   }
  // }, [auth, logoutx])

  return {
    login: auth?.isLoggedIn,
    logout,
    loading
  }
}

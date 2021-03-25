import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'
import { AuthReducer } from '../reducers'
import { EncripParse, DecripParseProm } from '../utils'
import { AuthContext } from './index'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
// import { DecripParseProm } from '../utils/ConvertEncrip'
// import jwt_decode from 'jwt-decode'
export { AuthContext }

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const initialState = {
    message: 'INITIAL LOGOUT',
    isLoggedIn: false,
    userId: '',
    timeout: 0,
    username: '',
    email: ''
  }
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [auth, dispatchAuth] = useReducer(AuthReducer, initialState)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const logout = useCallback(() => {
    dispatchAuth({ type: 'LOGOUT' })
    removeCookie('user', { path: '/' })
    router.push('/auth/login')
  }, [removeCookie, router])

  useEffect(() => {
    async function getcookie() {
      const LocalData = cookies.user
      // console.log(LocalData)
      if (
        LocalData &&
        (auth.message === 'INITIAL LOGOUT' || auth.message === 'SUCCESS LOGOUT')
      ) {
        await DecripParseProm(
          LocalData,
          process.env.NEXT_PUBLIC_CONTEXT_LOCK_RISELOKA
        )
          .then(resx => {
            // console.log(resx)
            // console.log(new Date(resx.timeout))
            dispatchAuth({
              type: 'RESTORE',
              payload: resx
            })
            setLoading(false)
          })
          .catch(() => {
            // console.log(err)
            logout()
          })
      }
    }
    getcookie()
  }, [cookies, auth, logout])

  // useEffect(() => {
  //   const localDataX = cookies.user
  //   const now = Date.now()
  //   if (
  //     auth.timeout !== null &&
  //     auth.isLoggedIn === true &&
  //     localDataX &&
  //     now > auth.timeout
  //   ) {
  //     logout()
  //   }
  // }, [auth, logout, cookies])

  useEffect(() => {
    if (auth.isLoggedIn === true) {
      // const now = Date.now()
      // const sum = auth.timeout - now

      const EncryptedContext = EncripParse(
        auth,
        process.env.NEXT_PUBLIC_CONTEXT_LOCK_RISELOKA
      )
      // console.log(new Date(auth.timeout))
      // console.log(new Date(sum))

      setCookie('user', EncryptedContext, {
        path: '/',
        expires: new Date(auth.timeout),
        secure: process.env.NODE_ENV !== 'development'
      })
      // setTimeout(() => {
      //   logout()
      // }, auth.timeout)
    }
  }, [auth, setCookie, router, logout])

  return (
    <AuthContext.Provider
      value={{ auth, dispatchAuth, loading, logout, removeCookie }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

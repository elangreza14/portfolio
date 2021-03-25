import React from 'react'
// import { PagesHeadTitle } from '.'
import Footer from './Footer'
// import { useRouter } from 'next/router'
// import { useAuth } from '../../hooks/useAuth'
// import { useWindowSize } from '../../hooks'
// import { Wrapper } from '../organisms'
// import style from './styles/MainNavigation.module.scss'
import Header from './Header'

// const MainNavigation = ({ children }) => {
//   const router = useRouter()
//   const windowSize = useWindowSize()
//   const { logout } = useAuth()

//   return router.pathname === '/auth/login' ||
//     router.pathname.split('/')[2] === 'print' ||
//     router.pathname === '/' ||
//     router.pathname === '/_error' ? (
//     <div className={style.fulllayout}>{children}</div>
//   ) : (
//     <Wrapper router={router} windowSize={windowSize} logout={logout}>
//       {children}
//     </Wrapper>
//   )
// }
const MainNavigation = ({ children }) => {
  return (
    <div style={{ height: '100vh', minHeight: '100vh' }}>
      <div>
        <Header />
        <div
          style={{
            padding: '0 15%',
            minHeight: '85vh',
            height: '85vh'
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainNavigation

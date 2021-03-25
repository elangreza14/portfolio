import React from 'react'
import ContextManager from '../context/ContextManager'
// import 'react-datetime/css/react-datetime.css'
import '../../styles/globals.scss'
import MainNavigation from '../components/template/MainNavigation'
// import '../../styles/print.css'
// import '../../styles/custom.scss'
// import { CookiesProvider } from 'react-cookie'
// import MainNavigation from '../components/template/MainNavigation'
// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextManager>
      <MainNavigation>
        <Component {...pageProps} />
      </MainNavigation>
    </ContextManager>
  )
}

export default MyApp

// return (
//   // <CookiesProvider>
//     {/* <ContextManager>
//       <MainNavigation> */}
//         <Component {...pageProps} />
//       {/* </MainNavigation>
//     </ContextManager> */}
//   {/* </CookiesProvider> */}
// )

import React from 'react'
// import AuthContextProvider from './AuthContextProvider'
import RoleContextProvider from './RoleContextProvider'
// import ModalContextProvider from './ModalContextProvider'

const ContextManager = ({ children }) => {
  return (
    // <AuthContextProvider>
    <RoleContextProvider>
      {/* <ModalContextProvider> */}
      {children}
      {/* </ModalContextProvider> */}
    </RoleContextProvider>
    // </AuthContextProvider>
  )
}

export default ContextManager

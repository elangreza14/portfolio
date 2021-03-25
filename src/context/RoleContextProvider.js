import React, { useReducer, useContext } from 'react'
import { RoleContext } from './index'
import { RoleReducer, initialRole } from '../reducers'

export const useRoleContext = () => useContext(RoleContext)

const RoleContextProvider = props => {
  const [state_role, dispatch_role] = useReducer(RoleReducer, initialRole)

  return (
    <RoleContext.Provider value={{ state_role, dispatch_role }}>
      {props.children}
    </RoleContext.Provider>
  )
}

export default RoleContextProvider

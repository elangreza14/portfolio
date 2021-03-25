import React, { useContext } from 'react'
import { useReducer } from 'react'
import { ModalContext } from './index'

export const useModalContext = () => useContext(ModalContext)

const ModalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, title: [...state.title, action.add] }
    case 'DEC':
      return {
        ...state,
        title: state.title.filter(x => x !== action.dec)
      }
    default:
      break
  }
}

const ModalContextProvider = props => {
  const initialmodal = { title: [] }

  const [state_modal, dispatch_modal] = useReducer(ModalReducer, initialmodal)

  return (
    <ModalContext.Provider value={{ state_modal, dispatch_modal }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider

import React from 'react'
import Styles from './styles/buttonstyling.module.scss'

const ButtonDanger = ({ type, onClick, title = 'Button', icon, width }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: width }}
      type={type}
      className={`
      ${Styles['ripple-danger']} ${Styles['button-custom']} ${Styles['button-custom-danger']}`}
    >
      {icon} {title}
    </button>
  )
}

export default ButtonDanger

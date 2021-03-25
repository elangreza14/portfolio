import React from 'react'
import Styles from './styles/buttonstyling.module.scss'

const ButtonWarning = ({ type, onClick, title = 'Button', icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
      ${Styles['ripple-warning']} ${Styles['button-custom']} ${Styles['button-custom-warning']}`}
    >
      {icon} {title}
    </button>
  )
}

export default ButtonWarning

import React from 'react'
import Styles from './styles/buttonstyling.module.scss'

const ButtonPrimary = ({
  type,
  onClick,
  title = 'Button',
  icon,
  width,
  height,
  fontSize,
  noShadow,
  customcolor
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        ${Styles['ripple-primary']} ${Styles['button-custom']} ${Styles['button-custom-primary']}`}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        boxShadow: noShadow ? 'none' : '',
        background: customcolor || ''
      }}
    >
      {icon} {title}
    </button>
  )
}

export default ButtonPrimary

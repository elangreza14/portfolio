import React from 'react'
import Styles from './styles/action.module.scss'

const ButtonActionWithoutTip = ({
  type,
  onClick,
  title,
  icon,
  variant = 'info',
  iconPosition = 'left',
  block = false,
  width
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ width: width ? width : block ? '100%' : '' }}
      className={`${Styles[`btn-action`]} ${Styles[variant]}`}
    >
      {iconPosition === 'left' && icon} {title}{' '}
      {iconPosition === 'right' && icon}
    </button>
  )
}

export default ButtonActionWithoutTip

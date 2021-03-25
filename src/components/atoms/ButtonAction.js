import React from 'react'
import ReactTooltip from 'react-tooltip'
import Styles from './styles/action.module.scss'

const ButtonAction = ({
  type,
  onClick,
  title,
  icon,
  variant = 'info',
  iconPosition = 'left',
  block = false,
  tip = null,
  width
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ width: width ? width : block ? '100%' : '' }}
      className={`${Styles[`btn-action`]} ${Styles[variant]}`}
      data-tip={tip && tip}
    >
      {iconPosition === 'left' && icon} {title}{' '}
      {iconPosition === 'right' && icon}
      <ReactTooltip effect="solid" />
    </button>
  )
}

export default ButtonAction

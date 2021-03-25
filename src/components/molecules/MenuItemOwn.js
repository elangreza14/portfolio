import React from 'react'
import { MenuItem } from 'react-pro-sidebar'

export function MenuItemOwn(props) {
  const { index, icon, cls, children, onAction } = props

  return (
    <MenuItem
      key={index}
      icon={icon}
      className={cls}
      onClick={() => (onAction ? onAction() : null)}
    >
      {children}
    </MenuItem>
  )
}

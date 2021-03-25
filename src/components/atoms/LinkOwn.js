import React from 'react'
import Link from 'next/link'

const LinkOwn = props => {
  const {
    path,
    name,
    // styleling,
    clss,
    children
  } = props
  return (
    <Link href={path} style={{ fontSize: '1.2vmin' }} classname={clss}>
      {children ? children : name}
    </Link>
  )
}

export default LinkOwn

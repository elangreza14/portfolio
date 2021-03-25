import React from 'react'

const ThGlobal = props => {
  return (
    <th
      className={props.alignLeft ? 'customhleft' : 'customtdglobal'}
      style={{
        minWidth: props.min ? props.min : 80,
        maxWidth: props.max && props.max,
        border: props.border
          ? '1px solid black'
          : props.customborder
          ? props.customborder
          : ''
      }}
      colSpan={props.colspan || '1'}
    >
      {props.children}
    </th>
  )
}

export default ThGlobal

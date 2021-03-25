import React from 'react'

const TdGlobal = props => {
  // console.log(props)
  return (
    <td
      className={props.alignLeft ? 'customtdgloballeft' : 'customtdglobal'}
      style={{
        border: props.border ? '1px solid black' : '',
        cursor: props.pointer || '',
        fontSize: props.fontSize || '1.4vmin'
      }}
      colSpan={props.colspan || '1'}
    >
      {props.children}
    </td>
  )
}

export default React.memo(TdGlobal)

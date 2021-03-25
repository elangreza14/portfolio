import React from 'react'

const TrGlobal = props => (
  <tr
    style={{
      fontSize: '.9em',
      textAlign: 'center',
      // cursor: 'pointer',
      background: props.selected
        ? '#ccc'
        : props.customback
        ? props.customback
        : '',
      border: props.customborder || '',
      cursor: props.pointer || '',
      // display: 'block'
      pageBreakBefore: 'auto'
    }}
    onClick={props.actionclick && props.actionclick}
    className={props.className || ''}
    ref={props.curref || null}
  >
    {props.children}
  </tr>
)

export default React.memo(TrGlobal)

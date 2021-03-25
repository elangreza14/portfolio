import React from 'react'

function TextError(props) {
  return (
    <div
      style={{
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 14,
        marginBottom: 5,
        color: 'red'
      }}
      className="error"
    >
      {props.children}
    </div>
  )
}

export default TextError

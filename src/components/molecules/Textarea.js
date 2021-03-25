import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea(props) {
  const {
    label,
    name,
    windowSize,
    direction,
    customclass,
    textarea,
    ...rest
  } = props
  const { labelMid } = textarea
  return (
    <div
      style={{
        margin: 5,
        display: 'flex',
        flexDirection: direction
          ? 'column'
          : windowSize.width < 550
          ? 'column'
          : 'row',
        justifyContent: 'space-between',
        maxWidth: 550
      }}
    >
      <div style={{ width: 250, height: 40 }}>
        <label style={{ fontWeight: 'bold' }} htmlFor={name}>
          {label}
        </label>
      </div>
      <div style={{ width: 300, minHeight: 100, maxHeight: 500 }}>
        <p>{labelMid}</p>
        <Field
          as={customclass || 'textarea'}
          className={customclass || 'textarea'}
          id={name}
          name={name}
          placeholder={label}
          {...rest}
        />
        <ErrorMessage component={TextError} name={name} />
      </div>
    </div>
  )
}

export default Textarea

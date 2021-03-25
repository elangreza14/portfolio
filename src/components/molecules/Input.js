import React, { useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
  const {
    label,
    name,
    windowSize,
    direction,
    typeGroup,
    labelGroup,
    nameGroup,
    values,
    // setfieldvalue,
    customclass,
    ...rest
  } = props

  const [valueInput, setValueInput] = useState(values[name])

  return (
    <div
      style={{
        margin: 5,
        display: 'flex',
        flexDirection:
          direction === true || typeGroup === true
            ? 'column'
            : windowSize.width < 550
            ? 'column'
            : 'row',
        justifyContent: 'space-between',
        maxWidth: nameGroup ? 300 : 550
      }}
    >
      <div style={{ width: 250, height: 40 }}>
        <label style={{ fontWeight: 'bold' }} htmlFor={nameGroup || name}>
          {labelGroup || label}
        </label>
      </div>
      <div style={{ width: 300, minHeight: 40, maxHeight: 60 }}>
        {/* <Field
          id={nameGroup || name}
          name={nameGroup || name}
          {...rest}
          className="form-control"
          placeholder={labelGroup || label}
        /> */}
        <Field name={name}>
          {({ form }) => {
            const { setFieldValue } = form
            return (
              <input
                {...rest}
                className={customclass || 'form-control'}
                placeholder={labelGroup || label}
                id={nameGroup || name}
                name={nameGroup || name}
                autoComplete="on"
                value={valueInput}
                onChange={e => {
                  setValueInput(e.target.value)
                  setFieldValue(name, e.target.value)
                }}
              />
            )
          }}
        </Field>
        <ErrorMessage component={TextError} name={nameGroup || name} />
      </div>
    </div>
  )
}

export default Input

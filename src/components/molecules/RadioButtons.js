import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons(props) {
  const { label, name, windowSize, direction, options } = props
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
        <label style={{ fontWeight: 'bold' }}>{label}</label>
      </div>
      <div
        style={{
          width: 280,
          minHeight: 40,
          maxHeight: 60
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          {options.map(option => (
            <div
              style={{ paddingRight: 30 }}
              role="group"
              aria-labelledby="my-radio-group"
              key={option.value}
            >
              <label>
                <Field type="radio" name={name} value={option.value} />
                {option.key}
              </label>
            </div>
          ))}
        </div>
        <ErrorMessage component={TextError} name={name} />
      </div>
    </div>
  )
}

export default RadioButtons

import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Select(props) {
  const { label, name, options, direction, action, windowSize, ...rest } = props

  // const [valueInput, setValueInput] = useState(values[name])

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
        <label htmlFor={name} style={{ fontWeight: 'bold' }}>
          {label}
        </label>
      </div>
      <div style={{ width: 300, minHeight: 40, maxHeight: 60 }}>
        {/* <Field
          as="select"
          id={name}
          name={name}
          {...rest}
          className="form-control"
        >
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            )
          })}
        </Field> */}
        <Field name={name}>
          {({ form }) => {
            // console.log(values)
            const { setFieldValue } = form
            return (
              <select
                id={name}
                name={name}
                className="form-control"
                // value={valueInput}
                {...rest}
                onChange={e => {
                  // setValueInput(e.target.value)
                  action(e.target.value)
                  setFieldValue(name, e.target.value)
                }}
              >
                {options.map(option => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  )
                })}
              </select>
            )
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    </div>
  )
}

export default Select

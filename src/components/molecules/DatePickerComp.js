import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import Datetime from 'react-datetime'
import { ConvertDate } from '../../utils'
// import moment from 'moment'

function DatePickerComp(props) {
  const {
    label,
    name,
    direction,
    windowSize,
    values,
    // validyesterday,
    // yesterdaytotal
  } = props

  // const yesterday = moment().subtract(yesterdaytotal ? 1 : 0, 'day')
  // const valid = function (current) {
  //   return validyesterday ? current.isAfter(yesterday) : current
  // }
  // console.log(yesterdaytotal)

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
        maxWidth: 550
      }}
    >
      <div style={{ width: 250, height: 40 }}>
        <label style={{ fontWeight: 'bold' }} htmlFor={name}>
          {label}
        </label>
      </div>
      <div style={{ width: 300, minHeight: 40, maxHeight: 60 }}>
        <Field name={name}>
          {({ form }) => {
            const { setFieldValue } = form
            // const { value } = field
            return (
              <Datetime
                // isValidDate={valid}
                timeFormat={false}
                value={values[name]}
                dateFormat="YYYY-MM-DD"
                defaultValue={ConvertDate(new Date())}
                onChange={async e => {
                  const test = await ConvertDate(e._d)
                  setFieldValue(name, test)
                }}
                style={{ width: 300, height: 30, padding: 0 }}
              />
            )
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    </div>
  )
}

export default DatePickerComp

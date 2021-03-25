import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import { useAuthContext } from '../../context/AuthContextProvider'
import { FetchAvailCategory } from './FetchAvailCategory'
import TextError from './TextError'

const DynamicFieldCategory = props => {
  const { auth } = useAuthContext()

  const { name, deleteval, searchval, ...rest } = props
  const { values, setFieldValue } = useFormikContext()

  const [currentAvailable, setCurrentAvailable] = useState([])
  const curVal = values[name]
  useEffect(() => {
    let isCurrent = true
    if (currentAvailable.length < 1) {
      FetchAvailCategory(auth, searchval).then(textC => {
        if (isCurrent) {
          setCurrentAvailable(textC)
          if (deleteval && deleteval.length > 0) {
            // deleteval.forEach(element => {
            //   setFieldValue('level.level_3', '')
            //   console.log(element)
            // })
          }
        }
      })
    }
    return () => {
      isCurrent = false
    }
  }, [
    currentAvailable,
    setFieldValue,
    name,
    auth,
    searchval,
    deleteval,
    curVal
  ])

  // useEffect(() => {
  //   if (selected) {
  //     setFieldValue(name, parseInt(selected))
  //   } else {
  //     setFieldValue(name, '')
  //   }
  // }, [selected, setFieldValue, name])

  return (
    <div
      style={{
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: 550
      }}
    >
      <div style={{ width: 250, height: 40 }}>
        <label style={{ fontWeight: 'bold' }} htmlFor={'level.level_1'}>
          Category
        </label>
      </div>
      <div style={{ width: 300, minHeight: 40, maxHeight: 60 }}>
        <Field
          as="select"
          id={name}
          name={name}
          {...rest}
          className="form-control"
        >
          {currentAvailable?.map(option => {
            return (
              <option
                key={option.value}
                value={option.value}
                // onChange={e => setSelected(parseInt(e.target.value))}
              >
                {`${option.key}${option?.name ? ' - ' : ''}${
                  option?.name || ''
                }`}
              </option>
            )
          })}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    </div>
  )
}

export default DynamicFieldCategory

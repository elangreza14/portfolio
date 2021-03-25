import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import { useAuthContext } from '../../context/AuthContextProvider'
import { FetchAvailCategory } from './FetchAvailCategory'
import TextError from './TextError'

const DynamicFieldSubCategory = props => {
  const { auth } = useAuthContext()

  const { name, searchval, label, ...rest } = props
  const { setFieldValue } = useFormikContext()

  const [currentAvailable, setCurrentAvailable] = useState([])

  useEffect(() => {
    let isCurrent = true
    if (searchval && searchval.trim() !== '') {
      FetchAvailCategory(auth, searchval).then(textC => {
        if (isCurrent) {
          setCurrentAvailable(textC)
          setFieldValue(name, '')
        }
      })
    }
    return () => {
      isCurrent = false
    }
  }, [auth, name, searchval, setFieldValue])

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
      <div style={{ width: 250 }}>
        <label style={{ fontWeight: 'bold' }} htmlFor={'level.level_1'}>
          {label}
        </label>
      </div>
      <div style={{ width: 300 }}>
        <Field
          as="select"
          id={name}
          name={name}
          {...rest}
          className="form-control"
        >
          {currentAvailable.length < 1 ? (
            <option value={''}>Choose One</option>
          ) : (
            currentAvailable?.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {`${option.key}${option?.name ? ' - ' : ''}${
                    option?.name || ''
                  }`}
                </option>
              )
            })
          )}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    </div>
  )
}

export default DynamicFieldSubCategory

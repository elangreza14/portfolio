import React, { useRef } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { FiArrowUpCircle } from 'react-icons/fi'

function FileUpload(props) {
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

  //   const [valueFile, setValueFile] = useState(values[name])
  const fileRef = useRef()

  const _validasiUpload = e => {
    let fileName = e?.target?.files?.[0]?.name
    if (/.(xlsx)/g.test(fileName)) {
      return true
    } else {
      e.target.value = null
      return false
    }
  }

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
        <Field name={name}>
          {({ form }) => {
            const { setFieldValue } = form
            return (
              <input
                {...rest}
                type="file"
                ref={fileRef}
                className={customclass || 'form-control'}
                placeholder={labelGroup || label}
                id={nameGroup || name}
                name={nameGroup || name}
                autoComplete="on"
                onChange={e => {
                  if (_validasiUpload(e)) {
                    const file = e.target.files[0]
                    setFieldValue(name, file)
                  } else {
                    setFieldValue(name, null)
                  }
                }}
                hidden
                pattern="^.+\.(xlsx|xls)$"
              />
            )
          }}
        </Field>
        <div
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onClick={() => fileRef.current.click()}
        >
          <FiArrowUpCircle size={30} style={{ marginRight: 10 }} />
          <h4>{values?.[name]?.name || 'Choose File'}</h4>
        </div>
        <ErrorMessage component={TextError} name={nameGroup || name} />
      </div>
    </div>
  )
}

export default FileUpload

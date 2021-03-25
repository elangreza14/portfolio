import React from 'react'
import FormikControl from '../molecules/FormikControl'

const FormLister = props => {
  const { fld, setfieldvalue, values, marginset } = props
  return (
    <>
      <FormikControl
        key={fld.name}
        control={fld.control}
        type={fld.type}
        step={fld.step}
        label={fld.label}
        name={fld.name}
        maxphoto={fld.control === 'arraystringphoto' ? fld.maxPhoto : null}
        options={fld.options}
        values={
          fld.control === 'arraystringphoto' ||
          fld.control === 'radio' ||
          fld.control === 'date' ||
          fld.control === 'rating' ||
          fld.control === 'select' ||
          fld.control === 'selectwithoutaction' ||
          fld.control === 'input'
            ? values
            : null
        }
        setfieldvalue={
          fld.control === 'arraystringphoto' ? setfieldvalue : null
        }
        enableminus={
          fld.control === 'arraystringphoto' ? fld.enableMinus : null
        }
        disabled={fld.control === 'input' ? fld.disabled : null}
        textarea={
          fld.control === 'textarea'
            ? {
                labelFirst: fld.labelFirst,
                labelMid: fld.labelMid,
                labelLast: fld.labelLast,
                labelSign: fld.sign
              }
            : null
        }
        compgroup={fld.control === 'group' ? fld.compGroup : null}
        labelGroup={fld.control === 'group' ? fld.labelGroup : null}
        direction={fld.direction}
        labelDevider={fld?.labelDevider}
        deviderColor={fld?.deviderColor}
        validyesterday={fld.control === 'date' ? fld.validYesterday : null}
        yesterdaytotal={fld.control === 'date' ? fld.yesterdaytotal : null}
      />
      <div style={{ margin: marginset || 15 }}></div>
    </>
  )
}

export default FormLister

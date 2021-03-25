import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import ArrayStringPhoto from './ArrayStringPhoto'
import DatePickerComp from './DatePickerComp'
import { useWindowSize } from '../../hooks'
import RatingComp from './RatingComp'
import SelectWithoutAction from './SelectWithoutAction'

function FormikControl(props) {
  const windowSize = useWindowSize()
  const {
    control,
    labelDevider,
    deviderColor,
    labelGroup,
    compgroup,
    ...rest
  } = props
  switch (control) {
    case 'input':
      return <Input {...rest} windowSize={windowSize} />
    case 'textarea':
      return <Textarea {...rest} windowSize={windowSize} />
    case 'select':
      return <Select {...rest} windowSize={windowSize} />
    case 'selectwithoutaction':
      return <SelectWithoutAction {...rest} windowSize={windowSize} />
    case 'radio':
      return <RadioButtons {...rest} windowSize={windowSize} />
    case 'arraystringphoto':
      return <ArrayStringPhoto {...rest} windowSize={windowSize} />
    case 'date':
      return <DatePickerComp {...rest} windowSize={windowSize} />
    case 'rating':
      return <RatingComp {...rest} windowSize={windowSize} />
    case 'devider':
      return (
        <div style={{ margin: '0 0 12.5px 0' }}>
          <div style={{ margin: '3.75px 0' }}>
            <label style={{ color: deviderColor }} htmlFor={name}>
              {labelDevider}
            </label>
          </div>
          <div style={{ border: '0.25px solid black' }}></div>
        </div>
      )
    case 'group':
      return (
        <div
          style={{
            margin: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 850,
            minHeight: 40,
            maxHeight: 80
          }}
        >
          <div style={{ minWidth: 245, minHeight: 40, maxHeight: 60 }}>
            <label style={{ fontWeight: 'bold' }} htmlFor={name}>
              {labelGroup}
            </label>
          </div>
          <div
            style={{
              minWidth: 600,
              minHeight: 40,
              maxHeight: 90,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            {compgroup.map((comp, index) => (
              <Input
                {...rest}
                windowSize={windowSize}
                key={index}
                direction={true}
                labelGroup={comp.label}
                nameGroup={comp.name}
                typeGroup={true}
              />
            ))}
          </div>
        </div>
      )
    default:
      return null
  }
}

export default FormikControl

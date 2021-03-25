import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import Rating from 'react-rating'
import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function RatingComp(props) {
  const { label, name, direction, windowSize, values } = props

  const [ratingValue, setRatingValue] = useState(values[name])

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
            return (
              <Rating
                initialRating={ratingValue || 0}
                onChange={rate => {
                  setRatingValue(rate)
                  setFieldValue(name, rate)
                }}
                emptySymbol={
                  <AiOutlineStar style={{ fontSize: 40, color: 'gold' }} />
                }
                fullSymbol={
                  <AiFillStar style={{ fontSize: 40, color: 'gold' }} />
                }
                style={{ width: 300, padding: 0 }}
              />
            )
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    </div>
  )
}

export default RatingComp

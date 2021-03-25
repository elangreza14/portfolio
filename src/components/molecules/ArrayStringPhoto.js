import React, { useState } from 'react'
import { FieldArray, ErrorMessage } from 'formik'
import TextError from './TextError'
// import NOPHOTO from '../../../public/no-photo-available.png'
import ImageUpload from './ImageUpload'
import { ModalReact } from '../organisms'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function ArrayStringPhoto(props) {
  const {
    label,
    name,
    values,
    setfieldvalue,
    windowSize,
    enableminus,
    maxphoto
  } = props

  const [modalImage, setModalImage] = useState(false)
  const [currentClick, setCurrentClick] = useState(0)

  const changeBackground = e => {
    e.target.style.background = '#717171'
  }

  const resetBackground = e => {
    e.target.style.background = ''
  }

  const handleNext = (val, cond) => {
    if (cond === true) {
      setCurrentClick(old => (old === 0 ? val - 1 : old - 1))
    } else {
      setCurrentClick(old => (val === old + 1 ? 0 : old + 1))
    }
  }
  // console.log(values[name])
  // console.log(name)
  return (
    <div
      style={{
        margin: 5,
        display: 'flex',
        flexDirection: windowSize.width < 550 ? 'column' : 'row',
        // justifyContent: 'space-between',
        width: 700
      }}
    >
      <div style={{ width: 250, height: 40 }}>
        <label htmlFor={name} style={{ fontWeight: 'bold' }}>
          {label}
        </label>
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {values[name]?.map((x, index) =>
            x === '' ? (
              <h4 key={index}>No Photo</h4>
            ) : (
              <img
                alt={index}
                key={index}
                // src={x ? x : NOPHOTO}
                src={x}
                style={{ width: 100, height: 100, marginRight: 5 }}
                onClick={() => {
                  setModalImage(true)
                  setCurrentClick(index)
                }}
              />
            )
          )}
        </div>
        <div>
          <FieldArray
            name={name}
            style={{ height: 60 }}
            render={arrayHelpers => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                {values[name]?.map((friend, index) => (
                  <div
                    key={index}
                    style={{ height: 60, width: 100, marginRight: 5 }}
                  >
                    <ImageUpload
                      name={name}
                      index={index}
                      setfieldvalue={setfieldvalue}
                      arrayHelpers={arrayHelpers}
                      maxphoto={maxphoto}
                      values={values}
                      enableminus={enableminus}
                    />
                  </div>
                ))}
              </div>
            )}
          />
          <ErrorMessage component={TextError} name={name} />
        </div>
      </div>
      <div>
        <ModalReact
          title={label}
          isOpen={modalImage}
          onAfterOpen={() => setModalImage(true)}
          onRequestClose={() => setModalImage(false)}
          size="lg"
        >
          <div
            style={{
              position: 'relative'
            }}
          >
            {values[name]?.length > 1 && (
              <AiOutlineLeft
                style={{
                  position: 'absolute',
                  color: 'white',
                  fontSize: 35,
                  left: 5,
                  top: '50%',
                  cursor: 'pointer'
                }}
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                onClick={() => handleNext(values[name].length, true)}
              />
            )}
            {values[name]?.length > 1 && (
              <AiOutlineRight
                style={{
                  position: 'absolute',
                  right: 5,
                  color: 'white',
                  fontSize: 35,
                  top: '50%',
                  cursor: 'pointer'
                }}
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                onClick={() => handleNext(values[name].length, false)}
              />
            )}
            {values[name]?.length > 1 && (
              <div
                style={{
                  position: 'absolute',
                  right: '45%',
                  left: '45%',
                  color: 'white',
                  fontSize: 35,
                  top: '87.5%',
                  cursor: 'pointer'
                }}
              >
                {currentClick + 1}/{values[name].length}
              </div>
            )}
            <img
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '500px'
                // maxWidth: '400px'
              }}
              // src={values[name][currentClick] || NOPHOTO}
              // alt={values[name][currentClick] || NOPHOTO}
              src={values?.[name]?.[currentClick]}
              alt={values?.[name]?.[currentClick]}
            />
          </div>
        </ModalReact>
      </div>
    </div>
  )
}

export default ArrayStringPhoto

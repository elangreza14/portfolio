import React, { useState, useEffect, useRef } from 'react'
import Styles from './styles/LoadingElement.module.css'
import LoadingBar from 'react-top-loading-bar'

const Loading = () => {
  const [progres, setProgres] = useState(10)
  const loadingInterval = useRef()

  useEffect(() => {
    if (progres >= 10 && progres <= 99) {
      loadingInterval.current = setInterval(() => {
        setProgres(old => old + 1)
      }, 1)
    }

    if (progres >= 99) {
      clearInterval(loadingInterval.current)
    }

    return () => {
      clearInterval(loadingInterval.current)
    }
  }, [progres])
  return (
    <div>
      <LoadingBar
        color="#EE4D00"
        progress={progres}
        height="4px"
        onLoaderFinished={() => setProgres(0)}
      />

      <div className={Styles['container__loading']}>
        <div className={Styles['sk-circle']}>
          <div
            className={`${Styles['sk-circle1']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle2']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle3']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle4']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle5']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle6']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle7']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle8']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle9']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle10']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle11']} ${Styles['sk-child']}`}
          ></div>
          <div
            className={`${Styles['sk-circle12']} ${Styles['sk-child']}`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Loading

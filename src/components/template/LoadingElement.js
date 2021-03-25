import React from 'react'
import Styles from './styles/LoadingElement.module.css'

const LoadingElement = () => {
  return (
    <div className={Styles['container-loading']}>
      <div className={Styles['sk-circle']}>
        <div className={Styles['sk-circle1 sk-child']}></div>
        <div className={Styles['sk-circle2 sk-child']}></div>
        <div className={Styles['sk-circle3 sk-child']}></div>
        <div className={Styles['sk-circle4 sk-child']}></div>
        <div className={Styles['sk-circle5 sk-child']}></div>
        <div className={Styles['sk-circle6 sk-child']}></div>
        <div className={Styles['sk-circle7 sk-child']}></div>
        <div className={Styles['sk-circle8 sk-child']}></div>
        <div className={Styles['sk-circle9 sk-child']}></div>
        <div className={Styles['sk-circle10 sk-child']}></div>
        <div className={Styles['sk-circle11 sk-child']}></div>
        <div className={Styles['sk-circle12 sk-child']}></div>
      </div>
    </div>
  )
}

export default LoadingElement

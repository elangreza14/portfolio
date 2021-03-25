import React, { useState, useEffect } from 'react'
import Styles from './styles/Box.module.scss'
import CountUp from 'react-countup'
import { CSSTransition } from 'react-transition-group'

const Box = ({ bg, fg, title, value, action }) => {
  const [show, SetShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      SetShow(true)
    }, 100)
    return () => {
      SetShow(false)
    }
  }, [])
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={Styles['alert']}
      unmountOnExit
    >
      <div
        className={Styles['box-dashboard']}
        onClick={action && action}
        style={{ backgroundColor: bg }}
      >
        <h3
          style={{
            textAlign: 'center',
            color: fg
          }}
        >
          {title}
        </h3>
        <div style={{ textAlign: 'center', color: fg, fontWeight: 'bold' }}>
          <CountUp end={value} duration={3} />
        </div>
      </div>
    </CSSTransition>
  )
}
export default Box

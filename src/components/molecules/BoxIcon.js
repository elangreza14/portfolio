import React, { useState, useEffect } from 'react'
import Styles from './styles/Box.module.scss'
import CountUp from 'react-countup'
import { CSSTransition } from 'react-transition-group'

const BoxIcon = ({ fg, title, value, action, icon }) => {
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
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}
        className={Styles['box-dashboard']}
        onClick={action && action}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={icon}
            alt={`Picture of the list ${icon}`}
            style={{
              maxWidth: '100%',
              maxHeight: 150,
              width: 'auto',
              height: 'auto',
              cursor: 'pointer'
            }}
            // onClick={() => router.push(`/project/${PortoData[current].id}`)}
          />
        </div>
        <div>
          <h3
            style={{
              textAlign: 'center',
              color: fg
            }}
          >
            {title}
          </h3>
          <div style={{ textAlign: 'center', color: fg, fontWeight: 'bold' }}>
            <CountUp end={value} duration={3} delay={0}>
              {({ countUpRef }) => (
                <div style={{ fontSize: 30 }}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
export default BoxIcon

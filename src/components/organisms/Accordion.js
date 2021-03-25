import React, { useState, useRef, useEffect } from 'react'
import { BsChevronDown, BsFlag } from 'react-icons/bs'
import { HiOutlineClock } from 'react-icons/hi'

const Accordion = props => {
  const { title, forceclose, stylebasic, children, dataAccordion } = props
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)
  const [flagExist, setFlagExist] = useState(false)
  const [pendingExist, setPendingExist] = useState(false)
  // console.log('isi didalam', dataAccordion)
  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  useEffect(() => {
    setActive(false)
  }, [forceclose])

  useEffect(() => {
    if (dataAccordion === null || dataAccordion === undefined) {
      setFlagExist(false)
    } else {
      const a = dataAccordion.find(element => element.flag === 1)
      const b = dataAccordion.find(
        element => element.status_tracking === 'pending'
      )
      // console.log(a)
      if (a === undefined || a === null) {
        setFlagExist(false)
      } else {
        setFlagExist(true)
      }
      if (b === undefined || b === null) {
        setPendingExist(false)
      } else {
        setPendingExist(true)
      }
    }
  }, [dataAccordion])

  const titleStyle = {
    fontWeight: 600,
    fontSize: '14px'
  }

  return (
    <div className="accordion-section">
      <div
        className="accordion-title"
        style={stylebasic}
        onClick={toogleActive}
      >
        <p style={titleStyle}>{title}</p>
        {flagExist === true || pendingExist === true ? (
          <div className="accordion-mar">
            {flagExist === true && (
              <BsFlag style={{ margin: '0 5px', fontSize: 20, color: 'red' }} />
            )}
            {pendingExist === true && (
              <HiOutlineClock
                style={{ margin: '0 5px', fontSize: 20, color: '#FFA500' }}
              />
            )}
          </div>
        ) : null}
        <span
          className={active ? 'accordion-icon rotate' : 'accordion-icon'}
          style={{
            marginLeft:
              flagExist === true || pendingExist === true ? '10px' : 'auto'
          }}
        >
          <BsChevronDown style={{ fontSize: 20 }} />
        </span>
      </div>

      <div ref={contentRef} className="accordion-content">
        {children}
      </div>
    </div>
  )
}

export default Accordion

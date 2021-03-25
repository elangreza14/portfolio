import React from 'react'
import styles from './styles/HeadDynamicView.module.scss'

const HeadDynamicView = props => {
  const { setCurrentView, changeView, currentView } = props
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {changeView.map(x => (
        <div
          key={x}
          className={
            x === currentView
              ? styles.headerviewactive
              : styles.headerviewnonactive
          }
        >
          <h4
            className={styles.textviewactive}
            onClick={() => setCurrentView(x)}
          >
            {x}
          </h4>
        </div>
      ))}
    </div>
  )
}

export default HeadDynamicView

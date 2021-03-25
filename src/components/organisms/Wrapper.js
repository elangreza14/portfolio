import React, { useState } from 'react'
import { useModalContext } from '../../context/ModalContextProvider'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import style from './styles/Wrapper.module.scss'

const Wrapper = props => {
  const { router, windowSize, logout, children } = props

  const [toggled, setToggled] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const handleToggleSidebar = value => {
    setCollapsed(false)
    setToggled(value)
  }

  const { state_modal } = useModalContext()

  return (
    <div className={style.fulllayout}>
      {state_modal.title.length === 0 && (
        <Sidebar
          router={router}
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          setToOpen={e => setCollapsed(e)}
          windowSize={windowSize}
          style={{ zIndex: 100 }}
        />
      )}
      <main
        className={style.main}
        style={{
          left: `${
            state_modal.title.length !== 0
              ? 0
              : windowSize.width < 750
              ? 0
              : collapsed
              ? 65
              : 220
          }px`,
          transition: `left ${collapsed ? 0.75 : 0.375}s ease-in-out`
          // background: `${expanded ? 'inherit' : 'rgba(0, 0, 0, .2)'}`
        }}
      >
        <Header
          toggled={toggled}
          windowSize={windowSize}
          handleToggleSidebar={handleToggleSidebar}
          logout={logout}
          router={router}
        />
        <div className={style.wrapper}>{children}</div>
        <footer className={style.footer}>
          <Footer />
        </footer>
      </main>
    </div>
  )
}

export default Wrapper

import React from 'react'
import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import { useAuthContext } from '../../context/AuthContextProvider'
import style from './styles/Header.module.scss'

const Header = props => {
  const { handleToggleSidebar, toggled, windowSize, logout, router } = props
  const { auth } = useAuthContext()
  // console.log(auth)
  return (
    <header className={style['site_header']}>
      <div className={style.left_header}>
        {windowSize.width < 750 && (
          <FaBars
            className={style.menu_toggle}
            onClick={() => handleToggleSidebar(!toggled)}
          />
        )}
        <h4 style={{ marginLeft: 20 }}>
          [ {auth.email} | {auth.level} ]
        </h4>
      </div>
      <div className={style.right_header}>
        <button
          className={style.button_header_notif}
          onClick={() =>
            router.route === '/app/dayoff/list'
              ? null
              : router.push('/app/dayoff/list')
          }
        >
          {/* <FaBell
            className={style.icon_bell_header}
          /> */}
          {/* <span>
            <p>0</p>
          </span> */}
        </button>
        <div className={style.divider} />
        <button onClick={() => logout()} className={style.logout_btn}>
          {/* <h4 style={{ marginLeft: 20 }}>{auth.level}</h4> */}
          <FaSignOutAlt className={style.icon_bell_header} />
          <p>Logout</p>
        </button>
      </div>
      {/* <ReactTooltip place="bottom" effect="solid" /> */}
    </header>
  )
}

export default React.memo(Header)

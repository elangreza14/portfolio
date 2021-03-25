import React, { useEffect, useState } from 'react'
import {
  ProSidebar,
  Menu,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { LinkOwn } from '../atoms'
import { MenuItemOwn } from '../molecules'
import Styles from './styles/Sidebar.module.scss'
import { useRoleContext } from '../../context/RoleContextProvider'
import { groupBy } from 'lodash'
import { SidebarIcon } from '../../assets/data/SidebarIcon'

const Sidebar = props => {
  const { state_role } = useRoleContext()
  const [currentGroup, setCurrentGroup] = useState([])

  useEffect(() => {
    const testBuffSidebar = state_role.pages.filter(x => x.visibilty === true)
    const groupByRole = Object.entries(groupBy(testBuffSidebar, 'menu'))
    setCurrentGroup(groupByRole)
  }, [state_role])

  const {
    router,
    toggled,
    collapsed,
    handleToggleSidebar,
    setToOpen,
    windowSize
  } = props
  // console.log(collapsed, toggled)
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      className={Styles.min_height}
      style={{ zIndex: 100 }}
    >
      <SidebarHeader>
        <div className={Styles.sidebar_header}>
          <LinkOwn path="/app/dashboard/home">
            <div>
              <h4 style={{ fontSize: collapsed ? 13.5 : 20 }}>
                {collapsed ? 'RISELOKA' : 'RISELOKA ADMIN'}
              </h4>
            </div>
          </LinkOwn>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          {currentGroup?.map((x, i) => {
            const IconName = SidebarIcon[`${x[0]}`]
            return x[1].length > 1 ? (
              <SubMenu title={x[0]} key={i} icon={IconName && <IconName />}>
                {x[1].map((y, index) => (
                  <MenuItemOwn
                    key={index}
                    cls={
                      router.route === y.pathbranch
                        ? Styles.active__sidebar
                        : ''
                    }
                  >
                    <LinkOwn path={`${y.link}`} name={y.title} />
                  </MenuItemOwn>
                ))}
              </SubMenu>
            ) : (
              <MenuItemOwn
                key={i}
                tooltipname={x[1][0].title}
                icon={<IconName />}
                cls={router.route === x.path ? Styles.active__sidebar : ''}
              >
                <LinkOwn
                  path={x[1][0].link}
                  data-tip={x[1][0].title}
                  name={x[1][0].title}
                />
              </MenuItemOwn>
            )
          })}
        </Menu>
      </SidebarContent>

      {windowSize.width > 750 && (
        <SidebarFooter className="footer-sidebar">
          <Menu>
            <MenuItemOwn
              onAction={() => setToOpen(!collapsed)}
              icon={collapsed ? <FaAngleRight /> : <FaAngleLeft />}
            >
              <a>Hide</a>
            </MenuItemOwn>
          </Menu>
        </SidebarFooter>
      )}
    </ProSidebar>
  )
}

export default Sidebar

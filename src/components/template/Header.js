import React from 'react'
import Link from 'next/link'
import styles from './styles/Header.module.scss'

const Header = () => {
  return (
    <div
      style={{
        padding: '0 15%',
        background: '#d0dbdf',
        maxHeight: '7.5vh',
        height: '7.5vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ width: '50%' }}>
          <h2 style={{ color: 'black' }}>Reza&apos;s Portfolio</h2>
          {/* // eslint-disable-next-line react/no-unescaped-entities */}
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <div
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 10,
              paddingLeft: 10,
            }}
          >
            <Link href="/">
              <a className={styles.linktext}>Home</a>
            </Link>
            <Link href="/project">
              <a className={styles.linktext}>Projects</a>
            </Link>
            <Link href="/contacts">
              <a className={styles.linktext}>Contacts</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

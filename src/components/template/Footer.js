import React, { useState } from 'react'
// import Link from 'next/link'
// import { GrTwitter, GrGithub, GrLinkedin } from 'react-icons/gr'
// import { HiOutlineMail } from 'react-icons/hi'
import { ContactData } from '../../assets/data'
import { ModalReact } from '../organisms'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  const [openModalEmail, setOpenModalEmail] = useState(false)
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
          maxHeight: '7.5vh',
          height: '7.5vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ width: '50%' }}>
          <h3 style={{ color: 'black' }}>2021@elangreza</h3>
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
              justifyContent: 'space-between'
            }}
          >
            {ContactData.map((x, index) => (
              <x.icon
                key={index}
                size={30}
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  x.action === true
                    ? window.open(x.link)
                    : setOpenModalEmail(true)
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <ModalReact
          isOpen={openModalEmail}
          onAfterOpen={() => setOpenModalEmail(true)}
          onRequestClose={() => setOpenModalEmail(false)}
          // title={`Email Detail`}
          sizeWidth={'50vw'}
          buttonaction
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <HiOutlineMail size={40} />
                  </td>
                  <td style={{ width: 50 }}></td>
                  <td>
                    <h3>rezaelangerlangga14@gmail.com</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ModalReact>
      </div>
    </div>
  )
}

export default Footer

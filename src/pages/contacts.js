import React from 'react'
import { ContactData } from '../assets/data'
// import { ModalReact } from '../components/organisms'
import { PagesHeadTitle } from '../components/template'

const Contacts = () => {
  return (
    <PagesHeadTitle>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div>
          <h1>Hello There, I&apos;m Muhammad Reza Elang Erlangga </h1>
        </div>

        <div>
          <h3>You Can Contact Me from</h3>
        </div>
        <div>
          <table>
            <tbody>
              {ContactData.map((x, index) => (
                <tr key={index}>
                  <td>{x.name}</td>
                  <td style={{ width: 100 }}></td>
                  <td
                    onClick={() =>
                      x.action === true ? window.open(x.link) : null
                    }
                    style={{
                      cursor: x.action === true ? 'pointer' : 'default'
                    }}
                  >
                    <h4>{x.value}</h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PagesHeadTitle>
  )
}

export default Contacts

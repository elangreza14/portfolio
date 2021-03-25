import React, { useState } from 'react'
import { PortoData } from '../assets/data'
import { useEffect } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { PagesHeadTitle } from '../components/template'

const Index = () => {
  const router = useRouter()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current != 4) {
        setCurrent(old => old + 1)
      } else {
        setCurrent(0)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <PagesHeadTitle>
      <div
        style={{
          padding: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          // width: '100%',
          height: '84vh'
        }}
      >
        <div style={{ width: '25%', padding: 5 }}>
          <div>
            <h1>Hi There,</h1>
            <h1>I&apos;m Reza Elang</h1>
          </div>
          <div>
            <h2>I&apos;m a Fullstack Developer</h2>
          </div>
          <div>
            <h2>Welcome to my Portfolio</h2>
          </div>
        </div>
        <div
          style={{
            width: '75%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100%',
            padding: '3%'
          }}
        >
          <div>
            <BsChevronLeft
              size={30}
              style={{ cursor: 'pointer' }}
              onClick={() => setCurrent(old => (old > 0 ? old - 1 : 4))}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={PortoData[current].images[0]}
              alt={`Picture of the author ${PortoData[current].images[0]}`}
              style={{
                maxWidth: '80%',
                // maxHeight: 720,
                width: 'auto',
                height: 'auto',
                cursor: 'pointer'
              }}
              onClick={() => router.push(`/project/${PortoData[current].id}`)}
            />
          </div>
          <div>
            <BsChevronRight
              size={30}
              style={{ cursor: 'pointer' }}
              onClick={() => setCurrent(old => (old > 3 ? 0 : old + 1))}
            />
          </div>
        </div>
      </div>
    </PagesHeadTitle>
  )
}

// export async function getServerSideProps(ctx) {
//   if (!IsBrowser() && ctx.res) {
//     ctx.res.setHeader('Content-Type', 'text/html')
//     ctx.res.writeHead(302, { Location: '/auth/login' })
//     ctx.res.end()
//   }
//   return {
//     props: {}
//   }
// }

export default Index

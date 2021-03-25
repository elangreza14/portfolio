import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PortoData } from '../../assets/data'
import { useState } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import ModalReact from '../../components/organisms/ModalReact'
import { PagesHeadTitle } from '../../components/template'

const Projectdetail = () => {
  const router = useRouter()
  const [currentdata, setCurrentdata] = useState(null)
  const [current, setCurrent] = useState(0)
  const [openModalImage, setOpenModalImage] = useState(false)
  const [currentZoom, setCurrentZoom] = useState(0)
  const { id } = router.query

  useEffect(() => {
    if (id) {
      const a = PortoData.find(x => parseInt(x.id) === parseInt(id))
      setCurrentdata(a)
    }
  }, [id])

  useEffect(() => {
    const interval = setInterval(() => {
      if (current != currentdata?.images?.length - 1) {
        setCurrent(old => old + 1)
      } else {
        setCurrent(0)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [current, currentdata])

  return (
    <PagesHeadTitle>
      <div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            height: '50vh'
            // padding: '0.5% 0'
          }}
        >
          <div>
            <BsChevronLeft
              size={30}
              style={{ cursor: 'pointer' }}
              onClick={() =>
                setCurrent(old =>
                  old > 0 ? old - 1 : currentdata?.images?.length - 1
                )
              }
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {currentdata && (
              <img
                src={currentdata?.images[current]}
                alt={`Picture of the author ${currentdata?.images[current]}`}
                style={{
                  maxWidth: '80%',
                  maxHeight: '55vh',
                  width: 'auto',
                  height: 'auto',
                  cursor: 'zoom-in'
                }}
                onClick={() => {
                  setCurrentZoom(current)
                  setOpenModalImage(true)
                }}
              />
            )}
          </div>
          <div>
            <BsChevronRight
              size={30}
              style={{ cursor: 'pointer' }}
              onClick={() =>
                setCurrent(old =>
                  old > currentdata?.images?.length - 2 ? 0 : old + 1
                )
              }
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            overflowY: 'auto',
            height: '10vh'
          }}
        >
          {currentdata &&
            currentdata?.images?.map((x, index) => (
              <img
                key={index}
                src={x}
                alt={`Picture of the author ${x}`}
                style={{
                  maxHeight: 100,
                  width: 'auto',
                  height: 'auto',
                  cursor: 'pointer',
                  marginRight: 10,
                  border: `1px solid ${index === current ? 'red' : '#cecece'}`
                }}
                onClick={() => setCurrent(index)}
              />
            ))}
        </div>
        <div
          style={{
            width: '100%',
            height: '10vh'
          }}
        >
          <div>
            <h2>
              {currentdata?.title} - {currentdata?.year}
            </h2>
          </div>
          <div>
            <p>{currentdata?.description}</p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '10vh',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          {/* <div>
            {PortoData?.[id != 1 ? id - 2 : PortoData.length - 1].id}.
            {PortoData?.[id != 1 ? id - 2 : PortoData.length - 1].title}
          </div> */}
          <div>
            <h3
              onClick={() =>
                router.push(
                  `/project/${
                    parseInt(id) === PortoData.length ? 1 : parseInt(id) + 1
                  }`
                )
              }
              style={{ cursor: 'pointer' }}
            >
              Read Next -{' '}
              {
                PortoData?.[
                  (parseInt(id) === PortoData.length ? 1 : parseInt(id) + 1) - 1
                ]?.title
              }{' '}
              {
                PortoData?.[
                  (parseInt(id) === PortoData.length ? 1 : parseInt(id) + 1) - 1
                ]?.year
              }
            </h3>
          </div>
        </div>
        <div>
          <ModalReact
            isOpen={openModalImage}
            onAfterOpen={() => setOpenModalImage(true)}
            onRequestClose={() => setOpenModalImage(false)}
            title={`Image Detail`}
            sizeWidth={'77.5vw'}
            buttonaction
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={currentdata?.images?.[currentZoom]}
                alt={`Picture of zoom ${currentdata?.images?.[currentZoom]}`}
                style={{
                  maxWidth: '75vw',
                  width: 'auto',
                  height: 'auto',
                  cursor: 'zoom-out'
                  // marginRight: 10
                }}
                onClick={() => setOpenModalImage(false)}
              />
            </div>
          </ModalReact>
        </div>
      </div>
    </PagesHeadTitle>
  )
}

export default Projectdetail

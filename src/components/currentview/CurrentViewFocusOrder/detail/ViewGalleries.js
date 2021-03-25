import React, { useState } from 'react'
import { useFetchPost } from '../../../../hooks'
import { BaseColor } from '../../../../utils'
import { motion, AnimatePresence } from 'framer-motion'
import { ModalReact } from '../../../organisms'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const ViewGalleries = props => {
  const { details, transition } = props
  const [currentDetails] = useState({
    order_id: details?.data?.id
  })
  const { data } = useFetchPost(
    false,
    transition === true ? null : '/order/galleries',
    currentDetails
  )
  const [openModalView, setOpenModalView] = useState(false)
  const [currentView, setCurrentView] = useState(0)
  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: 20,
        padding: 10,
        width: '80vw'
      }}
    >
      <div>
        <h4
          style={{
            margin: 5,
            color: BaseColor.Primary
          }}
        >
          GALLERIES
        </h4>
      </div>
      <div>
        <div
          style={{
            width: '80vw',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            flexFlow: 'wrap'
          }}
        >
          {data?.length < 1 || data === null ? (
            <div style={{ margin: 100 }}>Galery Kosong</div>
          ) : (
            data?.map((x, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: '22.5%',
                    height: 400,
                    margin: '1%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    border: '1px solid #ddd',
                    //   zIndex: 1,
                    borderRadius: 10,
                    boxShadow:
                      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                  }}
                  onClick={() => {
                    setCurrentView(index)
                    setOpenModalView(true)
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      minHeight: 310,
                      padding: '5px 0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: '#dedede',
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10
                    }}
                  >
                    <img
                      src={x.link}
                      height={200}
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: 290,
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                  <div
                    style={{
                      minHeight: 90,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <h4 style={{ margin: 0 }}>Type</h4>
                          </td>
                          <td>
                            <h4 style={{ margin: 0 }}>:</h4>
                          </td>
                          <td>
                            <h4 style={{ margin: 0 }}>{x.type}</h4>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h4 style={{ margin: 0 }}>Date</h4>
                          </td>
                          <td>
                            <h4 style={{ margin: 0 }}>:</h4>
                          </td>
                          <td>
                            <h4 style={{ margin: 0 }}>{x.date}</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
      <div>
        <ModalReact
          isOpen={openModalView}
          onAfterOpen={() => setOpenModalView(true)}
          onRequestClose={() => setOpenModalView(false)}
          sizeWidth="700px"
          title={`View Photo`}
        >
          <CurrentViewImage view={currentView} data={data} />
        </ModalReact>
      </div>
    </div>
  )
}

const CurrentViewImage = props => {
  const { view, data } = props
  const [isVisible, setIsVisible] = React.useState(true)
  const [viewCurr, setViewCurr] = React.useState(view || 0)

  React.useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
      setViewCurr(viewCurr)
    }, 250)
    return () => clearTimeout(timer)
  }, [viewCurr])

  const handleNext = (val, cond) => {
    if (cond === true) {
      setViewCurr(old => (old === 0 ? val - 1 : old - 1))
    } else {
      setViewCurr(old => (val === old + 1 ? 0 : old + 1))
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={'asas'}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0.8 }}
          exit={{ opacity: 0.8 }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: 700,
              maxHeight: 750
            }}
          >
            <img
              src={data[viewCurr]?.link}
              height={700}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: 700,
                maxHeight: 750,
                position: 'relative'
              }}
            />
            {data?.length > 1 && (
              <AiOutlineLeft
                style={{
                  position: 'absolute',
                  color: 'black',
                  background: 'white',
                  fontSize: 35,
                  left: 5,
                  top: '50%',
                  cursor: 'pointer'
                }}
                onClick={() => handleNext(data.length, true)}
              />
            )}
            {data?.length > 1 && (
              <AiOutlineRight
                style={{
                  position: 'absolute',
                  right: 5,
                  color: 'black',
                  background: 'white',
                  fontSize: 35,
                  top: '50%',
                  cursor: 'pointer'
                }}
                onClick={() => handleNext(data.length, false)}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ViewGalleries

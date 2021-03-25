import React
// , { useEffect }
 from 'react'
import Modal from 'react-modal'
import Styles from './styles/ModalReact.module.scss'
import { FaTimes } from 'react-icons/fa'
// import { useModalContext } from '../../context/ModalContextProvider'

// Modal.setAppElement('#root')
if (typeof window !== 'undefined') {
  Modal.setAppElement('html')
}

const ModalReact = props => {
  let {
    isOpen,
    onAfterOpen,
    onRequestClose,
    title,
    children,
    style,
    sizeWidth,
    padding = 20,
    buttonaction
  } = props

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      borderRadius: 15,
      width: sizeWidth || 600,
      transform: 'translate(-50%, -50%)',
      padding: padding,
      zIndex: 98999999,
      maxHeight: '99vh'
    }
  }

  // const { dispatch_modal } = useModalContext()

  // useEffect(() => {
  //   if (isOpen === true) {
  //     dispatch_modal({ type: 'ADD', add: title })
  //   }
  //   if (isOpen === false) {
  //     dispatch_modal({ type: 'DEC', dec: title })
  //   }
  // }, [isOpen, dispatch_modal, title])

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={style || customStyles}
      contentLabel={title}
      closeTimeoutMS={500}
    >
      {title && (
        <div className={Styles['modal-react-title']}>
          <h3 className="title-modal">{title}</h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <div>{buttonaction && buttonaction}</div>
            <div style={{ marginRight: 15 }} />
            <FaTimes
              style={{ fontSize: 20 }}
              className={Styles['modal-react-icon-close']}
              onClick={onRequestClose}
            />
          </div>
        </div>
      )}
      {children}
    </Modal>
  )
}

export default React.memo(ModalReact)

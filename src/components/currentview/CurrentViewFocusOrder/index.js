import React, { useEffect, useState } from 'react'
import ViewDetail from './detail/ViewDetail'
import ViewInvoice from './detail/ViewInvoice'
import ViewProduk from './detail/ViewProduk'
import { motion, AnimatePresence } from 'framer-motion'
import ViewGalleries from './detail/ViewGalleries'
import ViewCatatan from './detail/ViewCatatan'

const CurrentView = props => {
  //   const changeView = ['Detail', 'Invoice', 'Produk', 'galleries', 'catatan']
  const { details, view, handleactiondelete, transition } = props
  // console.log(details)
  switch (view) {
    case 'Detail':
      return <ViewDetail details={details} />
    case 'Invoice':
      return <ViewInvoice details={details} />
    case 'Produk':
      return (
        <ViewProduk details={details} handleactiondelete={handleactiondelete} />
      )
    case 'Galleries':
      return <ViewGalleries details={details} transition={transition} />
    case 'Catatan':
      return <ViewCatatan details={details} transition={transition} />
    default:
      return <div>Loading...</div>
  }
}

const CurrentViewFocusOrder = props => {
  const { view, details, handleactiondelete } = props
  const [isVisible, setIsVisible] = useState(true)
  const [viewCurr, setViewCurr] = useState(view)
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    setTransition(true)
    const timer = setTimeout(() => {
      setIsVisible(true)
      setViewCurr(view)
      setTransition(false)
    }, 350)
    return () => clearTimeout(timer)
  }, [view])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={'asas'}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <CurrentView
            view={viewCurr}
            details={details}
            handleactiondelete={handleactiondelete}
            transition={transition}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CurrentViewFocusOrder

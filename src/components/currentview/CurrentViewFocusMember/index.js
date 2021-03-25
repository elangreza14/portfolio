import React, { useEffect, useState } from 'react'
import ViewDeposit from './detail/ViewDeposit'
import ViewInvoice from './detail/ViewInvoice'
import ViewOrder from './detail/ViewOrder'
import ViewProfile from './detail/ViewProfile'
import ViewMembership from './detail/ViewMembership'
import { motion, AnimatePresence } from 'framer-motion'

const CurrentView = props => {
  const { details, view, transition } = props
  switch (view) {
    case 'Profile':
      return <ViewProfile details={details} />
    case 'Order':
      return <ViewOrder details={details} transition={transition} />
    case 'Invoice':
      return <ViewInvoice details={details} transition={transition} />
    case 'Deposit':
      return <ViewDeposit details={details} transition={transition} />
    case 'Membership':
      return <ViewMembership details={details} transition={transition} />
    default:
      return <div>Loading...</div>
  }
}

const CurrentViewFocusMember = props => {
  const { view, details } = props
  const [isVisible, setIsVisible] = useState(true)
  const [viewCurr, setViewCurr] = useState(view)
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
    setIsVisible(false)
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
            transition={transition}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CurrentViewFocusMember

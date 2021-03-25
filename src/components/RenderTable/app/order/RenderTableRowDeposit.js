import React from 'react'
import { TdGlobal, TrGlobal } from '../../../atoms'

const RenderTableRowDeposit = ({ ord, index }) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{ord?.date}</TdGlobal>
      <TdGlobal>{ord?.category}</TdGlobal>
      <TdGlobal>{ord?.debit}</TdGlobal>
      <TdGlobal>{ord?.credit}</TdGlobal>
      <TdGlobal>{ord?.balance}</TdGlobal>
      <TdGlobal>{ord?.ket}</TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowDeposit)
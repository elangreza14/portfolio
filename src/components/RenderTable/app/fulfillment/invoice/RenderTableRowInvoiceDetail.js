import React from 'react'
import { TdGlobal, TrGlobal } from '../../../../atoms'

const RenderTableRowInvoiceDetail = ({ invdet, index }) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{invdet.sku}</TdGlobal>
      <TdGlobal>{invdet.date}</TdGlobal>
      <TdGlobal>{invdet.variant1}</TdGlobal>
      <TdGlobal>{invdet.variant2}</TdGlobal>
      <TdGlobal>{invdet.status}</TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowInvoiceDetail)

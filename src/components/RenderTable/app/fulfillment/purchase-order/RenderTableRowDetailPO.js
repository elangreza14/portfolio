import React from 'react'
import { TdGlobal, TrGlobal } from '../../../../atoms'

const RenderTableRowDetailPO = ({ po, index }) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal border>{po.order_id}</TdGlobal>
      <TdGlobal border>{po.sku}</TdGlobal>
      <TdGlobal border>{po.variant_1}</TdGlobal>
      <TdGlobal border>{po.variant_2}</TdGlobal>
      <TdGlobal border>{po.qty}</TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowDetailPO)

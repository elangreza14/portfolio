import React from 'react'
import { FormatUang } from '../../../../utils'
import { TdGlobal, TrGlobal } from '../../../atoms'

// id: 185708
// price: 125200
// retur_info: ""
// sku: "ADV NAVY"
// status: "process_return"
// variant_1: "Tanpa Warna"
// variant_2: "M"

// { id: 0, name: 'ID' },
// { id: 1, name: 'SKU' },
// { id: 2, name: 'Variant 1' },
// { id: 3, name: 'Variant 2' },
// { id: 4, name: 'Price' },
// { id: 5, name: 'Retur Info' },
// { id: 6, name: 'Status' },

const RenderTableRowReturDetail = ({ index, ret }) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.sku}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.variant_1}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.variant_2}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{FormatUang(ret?.price)}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.retur_info}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.status}</TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowReturDetail)

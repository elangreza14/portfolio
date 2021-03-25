import React from 'react'
import { TdGlobal, TrGlobal } from '../../../../atoms'
import { AiOutlinePrinter } from 'react-icons/ai'
import { SiMicrosoftexcel } from 'react-icons/si'

const RenderTableRowPO = ({
  po,
  index,
  setOpenModalDetailPO,
  setGetDetailClick,
  exportFile
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      {/* <TdGlobal>{index + 1}</TdGlobal> */}
      <TdGlobal>{po.po_id}</TdGlobal>
      <TdGlobal>{po.order_id}</TdGlobal>
      <TdGlobal>{po.date}</TdGlobal>
      <TdGlobal>{po.brand}</TdGlobal>
      <TdGlobal>{po.sku}</TdGlobal>
      <TdGlobal>{po.variant1}</TdGlobal>
      <TdGlobal>{po.variant2}</TdGlobal>
      <TdGlobal>{po.qty}</TdGlobal>
      <TdGlobal>
        <AiOutlinePrinter
          onClick={() => {
            setOpenModalDetailPO(true)
            setGetDetailClick(`/po/detail/${po.po_id}`)
          }}
          style={{ width: 30, height: 30, cursor: 'pointer' }}
        />
        <SiMicrosoftexcel
          onClick={() => {
            exportFile(po.po_id)
          }}
          style={{ marginLeft: 10, width: 30, height: 30, cursor: 'pointer' }}
        />
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowPO)

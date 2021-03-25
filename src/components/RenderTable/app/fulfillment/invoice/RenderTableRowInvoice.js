import React from 'react'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../../atoms'

const RenderTableRowInvoice = ({
  inv,
  index,
  setCurrentNoteID,
  setLinkNoteGet,
  setOpenModalAddNote,
  setOrderIdDetail,
  setOpenModalDetailInvoice,
  setHandleStatusPrint
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{inv?.order_id}</TdGlobal>
      <TdGlobal>{inv?.date}</TdGlobal>
      <TdGlobal>{inv?.print === 1 ? 'Ya' : 'Belum'}</TdGlobal>
      <TdGlobal>{inv?.single_product === true ? 'Barang Satu' : 'Barang Lebih dari Satu'}</TdGlobal>
      <TdGlobal>
        <div
          style={{ fontSize: '1.4vmin', height: '22px', cursor: 'pointer' }}
          onClick={() => {
            setCurrentNoteID(inv?.order_id)
            setLinkNoteGet(`/order-notes?order_id=${inv?.order_id}`)
            setOpenModalAddNote(true)
          }}
        >
          {inv?.note}
        </div>
      </TdGlobal>
      <TdGlobal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonAction
            title="View Detail"
            onClick={() => {
              setOrderIdDetail(inv?.order_id)
              setOpenModalDetailInvoice(true)
            }}
          />
          <div style={{ margin: '0 5px' }} />
          <ButtonAction
            title="Print Invoice"
            onClick={() => {
              // setLinkInvoicePrint(`/inbound/invoice?order_id=${inv?.order_id}`)
              setHandleStatusPrint(`/inbound/print?order_id=${inv?.order_id}`)
              window.open(
                `${window.location.origin}/app/print/invoice/${inv?.order_id}`
              )
              // setReadyCreatePrint(true)
            }}
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowInvoice)

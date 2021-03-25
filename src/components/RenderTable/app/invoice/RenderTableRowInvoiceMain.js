import React from 'react'
import { FormatUang } from '../../../../utils'
import { TdGlobal, TrGlobal } from '../../../atoms'
import Image from 'next/image'

const RenderTableRowInvoiceMain = ({
  ord,
  index,
  setOpenModalConfirm,
  setDataConfirmInvoice,
  StatusList,
  dispatchMutation,
  setMutationChoose
}) => {
  return (
    <TrGlobal
      customback={index % 2 !== 0 && '#f8f7ff'}
      pointer={
        ord?.status === 'unpaid' || ord?.status === 'confirm'
          ? 'pointer'
          : 'default'
      }
      actionclick={() => {
        if (ord?.status === 'unpaid' || ord?.status === 'confirm') {
          setOpenModalConfirm(true)
          dispatchMutation({
            type: 'SEARCH',
            search_val: String(ord?.amount + ord?.transfer_code)
          })
          setDataConfirmInvoice(ord)
          setMutationChoose(null)
        }
      }}
    >
      <TdGlobal fontSize={'1.4vmin'}>{ord?.id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ord?.date}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ord?.type}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ord?.bank}</TdGlobal>
      {/* <TdGlobal fontSize={'1.4vmin'}>{ord?.transfer_code}</TdGlobal> */}
      <TdGlobal fontSize={'1.4vmin'}>
        {FormatUang(ord?.amount + ord?.transfer_code)}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {ord?.proof ? (
          <Image src={ord?.proof} width={80} height={80} />
        ) : (
          <h4 style={{ margin: 0 }}>-</h4>
        )}
      </TdGlobal>
      {/* <TdGlobal fontSize={'1.4vmin'}>{ord?.transfer_date}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ord?.paid_date}</TdGlobal> */}
      <TdGlobal fontSize={'1.4vmin'}>
        {ord?.member_id ? ord?.member_id : <h4 style={{ margin: 0 }}>-</h4>}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ord?.member_name}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ord?.member_phone}</TdGlobal>
      {/* <TdGlobal fontSize={'1.4vmin'}>{ord?.expired_date}</TdGlobal> */}
      <TdGlobal fontSize={'1.4vmin'}>
        {StatusList.find(x => x.c === ord?.status).d}
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowInvoiceMain)

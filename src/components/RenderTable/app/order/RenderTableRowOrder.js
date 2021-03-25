import React from 'react'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../atoms'

const RenderTableRowOrder = ({
  ord,
  index,
  StatusList,
  setCurrentDetails,
  dispatchDeposit,
  stateDeposit,
  setOpenModalDeposit,
  setOpenModalOrderDetail,
  setCurrentOrderDetail
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{ord?.order_id}</TdGlobal>
      <TdGlobal>{ord?.date}</TdGlobal>
      <TdGlobal>{ord?.invoice_id}</TdGlobal>
      <TdGlobal>{ord?.member_id}</TdGlobal>
      <TdGlobal>{ord?.member_name}</TdGlobal>
      <TdGlobal>{ord?.member_phone}</TdGlobal>
      <TdGlobal>{ord?.consumer_name}</TdGlobal>
      <TdGlobal>{StatusList.find(x => x.c === ord?.status).d}</TdGlobal>
      <TdGlobal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonAction
            title="Order Detail"
            type="button"
            variant="rilo"
            onClick={
              () => {
                setOpenModalOrderDetail(true)
                setCurrentOrderDetail({ order_id: ord?.order_id })
              }
              // window.open(
              //   `${window.location.origin}/app/order/detail/${ord?.order_id}`
              // )
            }
            width="140px"
          />
          <div style={{ margin: 5 }} />
          <ButtonAction
            title="History Deposit"
            type="button"
            variant="rilo"
            onClick={() => {
              setCurrentDetails({ id: ord?.member_id })
              dispatchDeposit({
                type: 'DEFINE_ALL',
                allstate: { ...stateDeposit, member_id: ord?.member_id }
              })
              setOpenModalDeposit(true)
            }}
            width="140px"
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowOrder)

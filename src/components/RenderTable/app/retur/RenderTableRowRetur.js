import React from 'react'
import { FormatUang } from '../../../../utils'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../atoms'

// order_id: "321011200174"
// price: 75000
// qty: 1
// status: "process_return"

const RenderTableRowRetur = ({
  index,
  ret,
  // handleOrderRetur,
  setCurrentReturDetail,
  setOpenModalReturDetail,
  setCurrentStatus
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.order_id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.qty}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{FormatUang(ret?.price)}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{ret?.status}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* {ret?.status === 'process_return' && ( */}
          <ButtonAction
            title="Detail"
            type="button"
            // onClick={() => handleOrderRetur(ret?.order_id)}
            onClick={() => {
              setOpenModalReturDetail(true)
              setCurrentReturDetail({ order_id: ret?.order_id })
              setCurrentStatus(ret?.status)
            }}
          />
          {/* )} */}
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowRetur)

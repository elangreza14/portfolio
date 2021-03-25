import React from 'react'
import { FormatUang } from '../../../../utils'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../atoms'

const RenderTableRowMutasi = ({
  mut,
  index,
  action,
  setMutationChoose,
  setOpenModalMutation
}) => {
  // "id": 1717,
  // "bank": "bniRilo",
  // "type": "CR",
  // "description": "TRANSFER DARI   | Bpk MUHAMMAD AZKA AULIYA",
  // "amount": 166262,
  // "balance": 13091380,
  // "date_trans": "2021-01-28",
  // "order_id": ""
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      {/* <TdGlobal>{mut?.id}</TdGlobal> */}
      <TdGlobal>{mut?.bank}</TdGlobal>
      <TdGlobal>{mut?.type}</TdGlobal>
      <TdGlobal>{mut?.description}</TdGlobal>
      <TdGlobal>Rp.{FormatUang(mut?.amount)}</TdGlobal>
      {/* <TdGlobal>{mut?.balance}</TdGlobal> */}
      <TdGlobal>{mut?.date_trans}</TdGlobal>
      <TdGlobal>
        {mut?.order_id ? mut?.order_id : <h4 style={{ margin: 0 }}>-</h4>}
      </TdGlobal>
      {action ? (
        <TdGlobal>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ButtonAction
              variant="rilofull"
              type="button"
              onClick={() => {
                setMutationChoose(mut)
                setOpenModalMutation(false)
              }}
              title="Choose"
            />
          </div>
        </TdGlobal>
      ) : null}
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowMutasi)

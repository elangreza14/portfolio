import React from 'react'
import { FormatUang } from '../../../../utils'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../atoms'

const RenderTableRowWithdraw = ({
  wthd,
  index,
  handleActionUpdateStatus,
  StatusList
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.member_id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.member_name}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{FormatUang(wthd?.amount)}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.bank}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.account_number}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.account_name}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.date}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {StatusList.find(x => x.c === wthd?.status).d}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {wthd?.status === 'pending' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ButtonAction
              type="button"
              onClick={() =>
                handleActionUpdateStatus('Confim', 'transfered', wthd?.id)
              }
              variant="successfull"
              title="Confirm"
            />
            <div style={{ margin: 5 }} />
            <ButtonAction
              type="button"
              onClick={() =>
                handleActionUpdateStatus('Cancel', 'canceled', wthd?.id)
              }
              variant="dangerfull"
              title="Cancel"
            />
          </div>
        )}
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowWithdraw)

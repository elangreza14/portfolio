import React from 'react'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../atoms'

const RenderTableRowReorder = ({
  wthd,
  index,
  StatusList,
  handleActionUpdateStatusCancel,
  handleActionUpdateStatusReprocess
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{wthd?.order_id}</TdGlobal>
      <TdGlobal>{wthd?.order_detail_id}</TdGlobal>
      <TdGlobal>{wthd?.po}</TdGlobal>
      <TdGlobal>{wthd?.member_name}</TdGlobal>
      <TdGlobal>{wthd?.member_phone}</TdGlobal>
      <TdGlobal>{wthd?.sku}</TdGlobal>
      <TdGlobal>{wthd?.variant}</TdGlobal>
      <TdGlobal>{StatusList.find(x => x.c === wthd?.inbound).d}</TdGlobal>
      <TdGlobal>{wthd?.po_date}</TdGlobal>
      <TdGlobal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonAction
            type="button"
            onClick={() => handleActionUpdateStatusCancel('Cancel', wthd?.id)}
            variant="rilo"
            title="Cancel"
          />
          <div style={{ margin: 5 }} />
          <ButtonAction
            type="button"
            onClick={() =>
              handleActionUpdateStatusReprocess('Reprocess', wthd?.id)
            }
            variant="rilo"
            title="Reprocess"
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowReorder)

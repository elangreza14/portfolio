import React from 'react'
import {
  ButtonActionWithoutTip,
  TdGlobal,
  TrGlobal
} from '../../../../../atoms'

const RenderTableRowInboundSearch = ({
  inbound,
  index,
  lengthsearch,
  handleAction,
  lastInboundRef
}) => {
  return (
    <TrGlobal
      customback={index % 2 !== 0 && '#f8f7ff'}
      curref={index + 1 === lengthsearch ? lastInboundRef : null}
    >
      <TdGlobal>{inbound.po_id}</TdGlobal>
      <TdGlobal>{inbound.order_id}</TdGlobal>
      <TdGlobal>{inbound.sku}</TdGlobal>
      <TdGlobal>{inbound.variant1}</TdGlobal>
      <TdGlobal>{inbound.variant2}</TdGlobal>
      <TdGlobal>
        {inbound.status === 'pending'
          ? 'Menunggu'
          : inbound.status === 'ok'
          ? 'Ok'
          : inbound.status === 'out_of_stock'
          ? 'Kosong '
          : inbound.status === 'reject'
          ? 'Cacat'
          : inbound.status === 'batal'
          ? 'Batal'
          : inbound.status === 'cancel'
          ? 'Batal'
          : inbound.status === 'Ok'
          ? 'Ok'
          : inbound.status === 'OK'
          ? 'Ok'
          : null}
      </TdGlobal>
      <TdGlobal>
        {inbound.status === 'pending' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row'
            }}
          >
            <ButtonActionWithoutTip
              title="Ok"
              onClick={() => handleAction(inbound.id, 'Ok', 'ok')}
            />
            <div style={{ margin: '0 5px' }} />
            <ButtonActionWithoutTip
              title="Kosong"
              onClick={() => handleAction(inbound.id, 'Kosong', 'out_of_stock')}
            />
            <div style={{ margin: '0 5px' }} />
            <ButtonActionWithoutTip
              title="Cacat"
              onClick={() => handleAction(inbound.id, 'Cacat', 'reject')}
            />
          </div>
        ) : inbound.status === 'ok' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row'
            }}
          >
            <ButtonActionWithoutTip
              title="Batal"
              onClick={() => handleAction(inbound.id, 'Batal', 'cancel')}
            />
          </div>
        ) : null}
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowInboundSearch)

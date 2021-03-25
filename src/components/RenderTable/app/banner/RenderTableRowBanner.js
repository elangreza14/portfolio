import React from 'react'
import { ButtonActionWithoutTip, TdGlobal, TrGlobal } from '../../../atoms'

// const dataHeaderInvoice = [
//   { id: 0, name: 'ID' },
//   { id: 1, name: 'Title' },
//   { id: 2, name: 'Link' },
//   { id: 3, name: 'Sort' },
//   { id: 4, name: 'Action' },
//   { id: 5, name: 'Status' }
// ]

const RenderTableRowBanner = ({
  bann,
  index,
  setOpenModalEdit,
  setcurrentBanner
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal fontSize={'1.4vmin'}>{bann?.id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{bann?.title}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{bann?.sort}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{bann?.action}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {/* {bann?.link} */}
        {bann?.link ? (
          <img
            src={bann?.link || 'test'}
            alt={`Picture D1 of ${bann?.link || 'test'}`}
            width={67.5}
            height={67.5}
            style={{
              margin: 10,
              width: 'auto',
              height: 'auto',
              maxHeight: 180,
              maxWidth: 280
            }}
          />
        ) : (
          <h4>No Photo</h4>
        )}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{bann?.status}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonActionWithoutTip
            title="Edit"
            type="button"
            variant="rilofull"
            onClick={() => {
              setOpenModalEdit(true)
              setcurrentBanner(bann)
            }}
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowBanner)

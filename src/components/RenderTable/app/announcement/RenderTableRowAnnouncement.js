import React from 'react'
import { ButtonActionWithoutTip, TdGlobal, TrGlobal } from '../../../atoms'

// "id": 0,
// "title": "test",
// "description": "tes",
// "img": "",
// "status": "published"

const RenderTableRowAnnouncement = ({
  wthd,
  index,
  setCurrentAnnounce,
  setOpenModalEdit
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.title}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.description}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {/* {wthd?.img} */}
        {wthd?.img ? (
          <img
            src={wthd?.img}
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
      <TdGlobal fontSize={'1.4vmin'}>{wthd?.status}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonActionWithoutTip
            onClick={() => {
              setCurrentAnnounce(wthd)
              setOpenModalEdit(true)
            }}
            type="button"
            title="Edit"
            variant="rilofull"
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowAnnouncement)

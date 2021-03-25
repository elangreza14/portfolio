import React from 'react'
import { ButtonActionWithoutTip, TdGlobal, TrGlobal } from '../../../atoms'
import Image from 'next/image'

const RenderTableRowBrand = ({
  brd,
  index,
  setDataDetailBrand,
  setOpenModalEdit,
  exportFile
}) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal fontSize={'1.4vmin'}>{brd?.id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{brd?.name}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {/* {StatusList.find(x => x.c === brd?.status)?.d} */}
        {brd.status}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {brd?.logo ? (
          <Image src={brd?.logo} width={160} height={120} layout="intrinsic" />
        ) : (
          '-'
        )}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonActionWithoutTip
            type="button"
            title="Edit Brand"
            variant="rilo"
            onClick={() => {
              setOpenModalEdit(true)
              setDataDetailBrand(`/brand/get/${brd?.id}`)
            }}
          />
          <div style={{ margin: 5 }} />
          <ButtonActionWithoutTip
            type="button"
            title="Export Brand"
            variant="rilo"
            onClick={() => {
              exportFile(brd?.id)
            }}
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowBrand)

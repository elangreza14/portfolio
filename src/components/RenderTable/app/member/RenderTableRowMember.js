import React from 'react'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../atoms'
import Image from 'next/image'

const RenderTableRowMember = ({ ord, index }) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{ord.id}</TdGlobal>
      <TdGlobal>{ord.name}</TdGlobal>
      <TdGlobal>{ord.phone}</TdGlobal>
      <TdGlobal>{ord.email}</TdGlobal>
      <TdGlobal>{ord.gender}</TdGlobal>
      <TdGlobal>
        {ord.photo ? (
          <Image src={ord.photo} width={80} height={80} />
        ) : (
          <h4 style={{ margin: 0 }}>-</h4>
        )}
      </TdGlobal>
      <TdGlobal>{ord.status}</TdGlobal>
      {/* { id: 7, name: 'Status' } */}
      <TdGlobal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonAction
            title="Member Detail"
            type="button"
            onClick={() =>
              window.open(
                `${window.location.origin}/app/member/detail/${ord.id}`
              )
            }
            width="140px"
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowMember)

import React from 'react'
import { TdGlobal } from '../atoms'

const RenderingTable = ({
  page,
  custom,
  alignments,
  index,
  action,
  noaction
}) => {
  return (
    <tr className={alignments || 'text-center'}>
      {page && (
        <TdGlobal
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {index + 1 + (page - 1) * 10}
        </TdGlobal>
      )}
      {custom.map((box, index) => (
        <TdGlobal
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          key={index}
        >
          {box}
        </TdGlobal>
      ))}
      {noaction === true
        ? null
        : action && (
            <TdGlobal
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {action}
            </TdGlobal>
          )}
    </tr>
  )
}

export default RenderingTable

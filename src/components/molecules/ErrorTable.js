import React from 'react'
import { TdGlobal } from '../atoms'

const ErrorTable = props => {
  let { posisiton, sum, dataInside } = props
  const arr = []
  for (let i = 0; i < sum; i++) {
    arr.push(i)
  }
  return (
    <tr className={posisiton}>
      {arr.map(index => (
        <TdGlobal key={index}>{dataInside}</TdGlobal>
      ))}
    </tr>
  )
}

export default ErrorTable

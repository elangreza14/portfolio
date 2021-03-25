import { toInteger } from 'lodash'
import React from 'react'
import { TdGlobal, TrGlobal } from '../../../../atoms'

const RenderTableRowSelectRow = ({
  po,
  index,
  stateTotalPo,
  dispatchTotalPo,
  currentIdBrand
}) => {
  return (
    <TrGlobal
      customback={index % 2 !== 0 && '#f8f7ff'}
      style={{ fontSize: '.9em', textAlign: 'center', cursor: 'pointer' }}
      actionclick={() =>
        stateTotalPo.order_details_params.findIndex(
          x => x.order_detail[0] === po.order_detail[0]
        ) === -1
          ? dispatchTotalPo({
              type: 'ADD',
              brand_id: toInteger(currentIdBrand),
              addItem: po
            })
          : dispatchTotalPo({
              type: 'DEC',
              removeItem: po.order_detail[0]
            })
      }
      selected={
        stateTotalPo.order_details_params.findIndex(
          x => x.order_detail[0] === po.order_detail[0]
        ) === -1
          ? false
          : true
      }
    >
      {/* <TdGlobal border>{index + 1}</TdGlobal> */}
      <TdGlobal border>{po.order_id}</TdGlobal>
      <TdGlobal border>{po.sku}</TdGlobal>
      <TdGlobal border>{po.variant_1}</TdGlobal>
      <TdGlobal border>{po.variant_2}</TdGlobal>
      <TdGlobal border>{po.qty}</TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowSelectRow)

// const RenderTableRowDetail = ({ po, index }) => {
//   return (
//     <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
//       <TdGlobal border>{po.order_id}</TdGlobal>
//       <TdGlobal border>{po.sku}</TdGlobal>
//       <TdGlobal border>{po.variant_1}</TdGlobal>
//       <TdGlobal border>{po.variant_2}</TdGlobal>
//       <TdGlobal border>{po.qty}</TdGlobal>
//     </TrGlobal>
//   )
// }

// const RenderTableRowPO = ({ po, index }) => {
//   return (
//     <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
//       {/* <TdGlobal>{index + 1}</TdGlobal> */}
//       <TdGlobal>{po.po_id}</TdGlobal>
//       <TdGlobal>{po.order_id}</TdGlobal>
//       <TdGlobal>{po.date}</TdGlobal>
//       <TdGlobal>{po.brand}</TdGlobal>
//       <TdGlobal>{po.sku}</TdGlobal>
//       <TdGlobal>{po.variant1}</TdGlobal>
//       <TdGlobal>{po.variant2}</TdGlobal>
//       <TdGlobal>{po.qty}</TdGlobal>
//       <TdGlobal>
//         <AiOutlinePrinter
//           onClick={() => {
//             setOpenModalDetailPO(true)
//             setGetDetailClick(`/po/detail/${po.po_id}`)
//           }}
//           style={{ width: 30, height: 30, cursor: 'pointer' }}
//         />
//         <SiMicrosoftexcel
//           onClick={() => {
//             exportFile(po.po_id)
//           }}
//           style={{ marginLeft: 10, width: 30, height: 30, cursor: 'pointer' }}
//         />
//       </TdGlobal>
//     </TrGlobal>
//   )
// }

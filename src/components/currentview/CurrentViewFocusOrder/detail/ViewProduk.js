import React from 'react'
import { BaseColor } from '../../../../utils'
import { ButtonPrimary, TdGlobal, ThGlobal, TrGlobal } from '../../../atoms'

const dataHeader = [
  { id: 0, name: 'Name', max: 240, min: 240 },
  { id: 1, name: 'Order ID', max: 120, min: 120 },
  { id: 2, name: 'SKU', max: 120, min: 120 },
  { id: 3, name: 'Variant 1', max: 120, min: 120 },
  { id: 4, name: 'Variant 2', max: 120, min: 120 },
  { id: 5, name: 'Status', max: 80, min: 80 },
  { id: 6, name: 'Action', max: 80, min: 80 }
]

const RenderTableRowDetail = ({ po, index, handleaction }) => {
  // console.log(po)
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal border>{po?.product_name}</TdGlobal>
      <TdGlobal border>{po?.id}</TdGlobal>
      <TdGlobal border>{po?.product_sku}</TdGlobal>
      <TdGlobal border>{po?.variant_1}</TdGlobal>
      <TdGlobal border>{po?.variant_2}</TdGlobal>
      <TdGlobal border>{po?.status}</TdGlobal>
      <TdGlobal border>
        {po?.status !== 'canceled' && (
          <ButtonPrimary
            type="button"
            title="Cancel"
            width="125px"
            customcolor={BaseColor.Primary}
            noShadow
            // onClick={() => handleActionCancelProduct(po.id)}
            onClick={() => handleaction(po.id)}
            // setCancelOrderProduct({ order_detail_id: po.id })}
          />
        )}
      </TdGlobal>
    </TrGlobal>
  )
}

const ViewProduk = props => {
  const { details, handleactiondelete } = props
  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: 10,
        padding: 10,
        width: '80vw'
      }}
    >
      <div>
        <h4
          style={{
            margin: 5,
            color: BaseColor.Primary
          }}
        >
          LIST BARANG
        </h4>
      </div>
      <div style={{ marginTop: 20 }}>
        <table
          className="potable"
          style={{
            border: '1px solid #ccc',
            borderCollapse: 'collapse'
          }}
        >
          <thead
            style={{
              background: '#6d7ae0',
              color: 'white',
              border: '1px solid #6d7ae0'
            }}
          >
            <TrGlobal customborder="1px solid #6d7ae0">
              {dataHeader.map((head, index) => (
                <ThGlobal
                  key={index}
                  customborder="1px solid #6d7ae0"
                  min={head.min}
                  max={head.max}
                >
                  {head.name}
                </ThGlobal>
              ))}
            </TrGlobal>
          </thead>
          <tbody style={{ border: '1px solid #ccc' }}>
            {details?.data?.products.map((po, index) => (
              <RenderTableRowDetail
                key={index}
                index={index}
                po={po}
                handleaction={handleactiondelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewProduk

import { Field, Form, Formik } from 'formik'
import React from 'react'
import {
  ButtonActionWithoutTip,
  TdGlobal,
  TrGlobal
} from '../../../../../atoms'

const RenderTableRowOutboundSearch = ({
  outbound,
  index,
  lengthsearch,
  lastOutboundRef,
  handleAction
}) => {
  //   id: 195621
  // price: 121200
  // product_name: "Sandal Pria / Sandal Santai / Sandal Casual Pria -  LRE 724"
  // product_sku: "BCL 724"
  // status: "ok"
  // variant_1: "Tanpa Warna"
  // variant_2: "39"
  return (
    <TrGlobal
      customback={index % 2 !== 0 && '#f8f7ff'}
      curref={index + 1 === lengthsearch ? lastOutboundRef : null}
    >
      <TdGlobal>{outbound?.id}</TdGlobal>
      <TdGlobal>{outbound?.price}</TdGlobal>
      <TdGlobal>{outbound?.product_name}</TdGlobal>
      <TdGlobal>{outbound?.product_sku}</TdGlobal>
      <TdGlobal>{outbound?.variant_1}</TdGlobal>
      <TdGlobal>{outbound?.variant_2}</TdGlobal>
      <TdGlobal>
        {/* "process","po","ok","process-return","returned" */}
        {outbound?.status === 'process'
          ? 'Process'
          : outbound?.status === 'po'
          ? 'PO'
          : outbound?.status === 'ok'
          ? 'OK'
          : outbound?.status === 'process_return'
          ? 'Process-Return'
          : outbound?.status === 'returned'
          ? 'Returned'
          : outbound?.status === 'request_return'
          ? 'Request-Return'        
          : null}
      </TdGlobal>
      <TdGlobal>
        {outbound?.status !== 'process_return' &&
        outbound?.status !== 'returned' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row'
            }}
          >
            {/* "order_detail_id" : 195620,
    "retur_info" : "Barang kosong" */}
            <Formik
              initialValues={{
                order_detail_id: outbound?.id,
                retur_info: ''
              }}
              onSubmit={val => {
                console.log(val)
                handleAction(val)
              }}
            >
              {() => (
                <Form>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Field
                      name="retur_info"
                      id={`retur_info.${outbound?.id}`}
                      className="form-control-min"
                    />
                    <div
                      style={{
                        margin: 5
                      }}
                    />
                    <ButtonActionWithoutTip
                      title="Process"
                      type="submit"
                      // onClick={() => handleAction(outbound?.id, 'Ok', 'ok')}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : null}
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowOutboundSearch)

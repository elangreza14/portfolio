import { Field, Form, Formik } from 'formik'
import React from 'react'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../../atoms'

const RenderTableRowEksp = ({ eksp, index, setDataPostAwb }) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{eksp.order_id}</TdGlobal>
      <TdGlobal>{eksp.courier}</TdGlobal>
      <TdGlobal>{eksp.service}</TdGlobal>
      <TdGlobal>{eksp.booking_code}</TdGlobal>
      {/* <TdGlobal>{eksp.booking_img}</TdGlobal> */}
      <TdGlobal>{eksp.date}</TdGlobal>
      <TdGlobal>{eksp.status}</TdGlobal>
      <TdGlobal>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Formik
            initialValues={{
              order_id: eksp.order_id,
              awb: eksp.awb
            }}
            onSubmit={val => {
              console.log(val)
              setDataPostAwb(val)
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
                    name="awb"
                    id={`awb.${eksp.order_id}`}
                    className="form-control-min"
                  />
                  <div
                    style={{
                      margin: 5
                    }}
                  />
                  <ButtonAction
                    type="submit"
                    title={eksp.awb ? 'Update' : 'Kirim'}
                    width="70px"
                  />
                </div>
              </Form>
            )}
          </Formik>
          <div style={{ margin: 5 }} />
          <ButtonAction
            title="Print"
            type="button"
            onClick={() =>
              window.open(
                `${window.location.origin}/app/print/invoice/${eksp.order_id}`
              )
            }
            width="70px"
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowEksp)

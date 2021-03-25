import { Form, Formik } from 'formik'
import React from 'react'
import { BaseColor } from '../../../../utils'
import { ButtonPrimary } from '../../../atoms'
import FormikControl from '../../../molecules/FormikControl'

import {
  OrderDetailLeftStructure,
  OrderDetailResiLeftStructure,
  OrderDetailResiRightStructure,
  OrderDetailRightStructure
} from '../../../../FormControl/FormStructure'

const ViewDetail = props => {
  const { details } = props
  return (
    <div>
      <div
        style={{
          border: '2px solid #ddd',
          borderRadius: 10,
          padding: 10,
          width: '80vw'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h4
            style={{
              margin: 5,
              color: BaseColor.Primary
            }}
          >
            ORDER / #{details?.data?.id}
          </h4>
          <h4
            style={{
              margin: 5,
              color: 'green'
            }}
          >
            {details?.data?.status}
          </h4>
        </div>
        {/* {JSON.stringify(props.data)} */}
        <div style={{ width: '100%' }}>
          <Formik
            initialValues={{
              nama_penerima: details?.data?.consumer.consumer_name,
              nomor_penerima: details?.data?.consumer.consumer_phone,
              provinsi: details?.data?.consumer.province,
              alamat: details?.data?.consumer.address,
              kota: details?.data?.consumer.city,
              kecamatan: details?.data?.consumer.sub_district,
              kode_pos: details?.data?.consumer.post_code,
              nama_label: details?.data?.label.label_name,
              nomor_label: details?.data?.label.label_phoe,
              website_label: details?.data?.label.label_website,
              logo_label: [details?.data?.label.label_logo]
            }}
            onSubmit={values => {
              console.log(values)
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {OrderDetailLeftStructure.map((x, index) => (
                      <FormikControl
                        key={index}
                        values={values}
                        control="input"
                        type="text"
                        label={x.label}
                        name={x.name}
                        // customclass={'form-control-mid'}
                      />
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {OrderDetailRightStructure.map((x, index) => (
                      <FormikControl
                        key={index}
                        values={values}
                        control={x.control}
                        setfieldvalue={
                          x.control === 'arraystringphoto'
                            ? setFieldValue
                            : null
                        }
                        type={x.type}
                        label={x.label}
                        name={x.name}
                        textarea={x.labelMid}
                        // disabled={x.disabled}
                        // customclass={
                        //   x.control === 'input'
                        //     ? 'form-control-mid'
                        //     : null
                        // }
                      />
                    ))}
                  </div>
                </div>
                <div style={{ margin: '15px 0 0' }}>
                  <ButtonPrimary
                    type="submit"
                    title="Update!"
                    width="125px"
                    customcolor={BaseColor.Primary}
                    noShadow
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div
        style={{
          border: '2px solid #ddd',
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
          width: '80vw'
        }}
      >
        <div style={{ width: '100%' }}>
          <Formik
            initialValues={{
              kode_booking: details?.data?.code_booking,
              resi: details?.data?.awb,
              booking_img: [details?.data?.code_booking_img]
            }}
            onSubmit={values => {
              console.log(values)
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {OrderDetailResiLeftStructure.map((x, index) => (
                      <FormikControl
                        key={index}
                        values={values}
                        control="input"
                        type="text"
                        label={x.label}
                        name={x.name}
                      />
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {OrderDetailResiRightStructure.map((x, index) => (
                      <FormikControl
                        key={index}
                        values={values}
                        control={x.control}
                        setfieldvalue={
                          x.control === 'arraystringphoto'
                            ? setFieldValue
                            : null
                        }
                        type={x.type}
                        label={x.label}
                        name={x.name}
                        textarea={x.labelMid}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ margin: '15px 0 0 0' }}>
                  <ButtonPrimary
                    type="submit"
                    title="Update!"
                    width="125px"
                    customcolor={BaseColor.Primary}
                    noShadow
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ViewDetail

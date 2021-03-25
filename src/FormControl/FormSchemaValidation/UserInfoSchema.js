import { Yup } from './index'

export const UserInfoSchema = props => {
  return Yup.object().shape({
    order_number: Yup.string().required('Required'),
    send_date: Yup.string().required('Required'),
    shift: Yup.string().when('send_date', {
      is: val =>
        props.find(x => {
          return x.key === val
        })?.decision_send === 1,
      then: Yup.string().required('Required'),
      otherwise: Yup.string().notRequired()
    }),
    user_info: Yup.object().shape({
      first_name: Yup.string().required('Required'),
      last_name: Yup.string().required('Required'),
      postal_code: Yup.string().required('Required'),
      prefecture: Yup.string().required('Required'),
      chome: Yup.string().required('Required'),
      kana_after_address: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      phone_number: Yup.string().required('Required')
    }),
    order_detail: Yup.object().shape({
      delivery_destination: Yup.object().shape({
        lat: Yup.string().required('Required'),
        long: Yup.string().required('Required')
      }),
      pickup_destination: Yup.array()
        .of(
          Yup.object().shape({
            pickup_store_name: Yup.string().required('Required'),
            lat: Yup.string().required('Required'),
            long: Yup.string().required('Required'),
            pickup_item: Yup.array()
              .of(
                Yup.object().shape({
                  item_name: Yup.string().required('Required'),
                  qty: Yup.string().required('Required'),
                  qr_code_raw: Yup.string().required('Required')
                })
              )
              .required('Required')
              .min(1, 'Required')
          })
        )
        .required('Required')
        .min(1, 'Required')
    })
  })
}

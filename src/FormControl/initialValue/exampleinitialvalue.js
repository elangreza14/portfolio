export const UserInfoAssignOrder = {
  first_name: '',
  last_name: '',
  postal_code: '',
  prefecture: '',
  chome: '',
  kana_after_address: '',
  address: '',
  phone_number: ''
}

export const DeliveryDestination = {
  lat: '',
  long: ''
}

export const PickUpDestination = [
  {
    pickup_store_name: '',
    lat: '',
    long: '',
    pickup_item: [
      {
        item_name: '',
        qty: '',
        qr_code_raw: ''
      }
    ]
  }
]

export const OrderDetailAssignOrder = {
  delivery_destination: DeliveryDestination,
  pickup_destination: PickUpDestination
}

export const PickUpItem = [
  {
    item_name: '',
    qty: '',
    qr_code_raw: ''
  }
]

// isi semua oi

export const AssginOrder = {
  order_number: Math.floor(Math.random() * 1000000000000),
  send_date: '',
  shift: '',
  user_info: UserInfoAssignOrder,
  order_detail: OrderDetailAssignOrder
}


// {
//   control: 'select',
//   type: 'text',
//   label: currentLang ? 'Working Status JAPAN' : 'Working Status',
//   name: 'working_status',
//   options: [
//     { value: '', key: currentLang ? 'Working Status JAPAN' : 'Choose One' },
//     {
//       value: 'part time',
//       key: currentLang ? 'Working Status JAPAN' : 'Part Time'
//     },
//     {
//       value: 'full time',
//       key: currentLang ? 'Working Status JAPAN' : 'Full Time'
//     },
//     {
//       value: 'freelance',
//       key: currentLang ? 'Working Status JAPAN' : 'Freelance'
//     }
//   ]
// },
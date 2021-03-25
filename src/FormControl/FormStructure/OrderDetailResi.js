export const OrderDetailResiLeftStructure = [
  {
    control: 'input',
    type: 'text',
    label: 'Kode Booking',
    name: 'kode_booking'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Resi',
    name: 'resi'
  }
]

export const OrderDetailResiRightStructure = [
  {
    control: 'arraystringphoto',
    type: 'array',
    label: 'Booking Img',
    name: 'booking_img',
    maxPhoto: 1,
    enableMinus: false
  }
]

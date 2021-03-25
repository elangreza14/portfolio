export const OrderDetailRightStructure = [
  {
    control: 'input',
    type: 'text',
    label: 'Nomor Penerima',
    // disabled: 'disabled',
    name: 'nomor_penerima'
  },
  {
    control: 'textarea',
    type: 'text',
    label: 'Alamat',
    name: 'alamat',
    labelMid: ''
  },
  {
    control: 'arraystringphoto',
    type: 'array',
    label: 'Logo Label',
    name: 'logo_label',
    maxPhoto: 1,
    enableMinus: false
  }
]

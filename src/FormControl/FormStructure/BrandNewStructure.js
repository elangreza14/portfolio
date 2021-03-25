// {
//     "name" : "Blue Race",
//     "description" : "",
//     "logo" : "",
//     "type" : "fulfilment"
// }

export const BrandNewStructure = [
  {
    control: 'input',
    type: 'text',
    label: 'Name',
    name: 'name'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Description',
    name: 'description'
  },
  {
    control: 'arraystringphoto',
    type: 'array',
    label: 'Logo',
    name: 'logo',
    maxPhoto: 1,
    enableMinus: false
  },
  {
    control: 'selectwithoutaction',
    type: 'text',
    label: 'Type',
    name: 'type',
    options: [
      { value: '', key: 'Choose One' },
      {
        value: 'fulfillment',
        key: 'fulfillment'
      },
      {
        value: 'marketplace',
        key: 'marketplace'
      }
    ]
  }
]

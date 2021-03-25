// {
//     "brand_id" : 126,
//     "sku" : "",
//     "code" : "",
//     "name" : "",
//     "category_id" : 0,
//     "description" : "",
//     "variant_1" : "",
//     "variant_2" : "",
//     "marketing_kit" :"",
// }

export const AddProductStructure = [
  {
    control: 'input',
    type: 'text',
    label: 'SKU',
    name: 'sku'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Code',
    name: 'code'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Name',
    name: 'name'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Slug',
    name: 'slug'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Variant 1',
    name: 'variant_1'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Variant 2',
    name: 'variant_2'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Marketing Kit',
    name: 'marketing_kit'
  },
  {
    control: 'textarea',
    type: 'text',
    label: 'Description',
    name: 'description'
  }
]

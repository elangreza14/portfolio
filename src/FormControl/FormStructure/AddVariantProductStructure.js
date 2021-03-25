// {
//     "id" : 32,
//     "variant1" : "Tanpa Warna",
//     "variant2" : "L",
//     "weight" : 450,
//     "selling_price" : 120000,
//     "reseller_price" : 100000,
//     "distributor_price" : 95000,
//     "wholesale_price" :90000,
//     "purchase_price" : 87000,
//     "status" : "published"
// }

export const AddVariantProductStructure = [
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
      type: 'number',
      label: 'Weight',
      name: 'weight'
    },
    {
      control: 'input',
      type: 'number',
      label: 'Selling Price',
      name: 'selling_price'
    },
    {
      control: 'input',
      type: 'number',
      label: 'Reseller Price',
      name: 'reseller_price'
    },
    {
      control: 'input',
      type: 'number',
      label: 'Distributor Price',
      name: 'distributor_price'
    },
    {
      control: 'input',
      type: 'number',
      label: 'Wholesale Price',
      name: 'wholesale_price'
    },
    {
      control: 'input',
      type: 'number',
      label: 'Purchase Price',
      name: 'purchase_price'
    },
    {
      control: 'selectwithoutaction',
      type: 'text',
      label: 'Status',
      name: 'status',
      options: [
        { value: '', key: 'Choose One' },
        {
          value: 'published',
          key: 'Published'
        },
        {
          value: 'unpublished',
          key: 'Unpublished'
        }
      ]
    }
  ]
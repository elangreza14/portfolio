// "title" : "test",
// "description" : "tes",
// "img" : ""

export const EditAnnouncementStructure = [
  {
    control: 'input',
    type: 'text',
    label: 'Title',
    name: 'title'
  },
  {
    control: 'textarea',
    type: 'input',
    label: 'Description',
    name: 'description'
  },
  {
    control: 'arraystringphoto',
    type: 'array',
    label: 'Image',
    name: 'img',
    maxPhoto: 1,
    enableMinus: false
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

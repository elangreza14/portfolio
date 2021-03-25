// {
//     "id" : 4,
//     "title" : "Test",
//     "img" : "",
//     "sort" : 4,
//     "action" : "https://www.youtube.com/watch?v=kRZSs3sv1yY",
//     "status" : "published"
// }

export const EditBannerStructure = [
  {
    control: 'input',
    type: 'text',
    label: 'Title',
    name: 'title'
  },
  {
    control: 'input',
    type: 'number',
    label: 'Sort',
    name: 'sort'
  },
  {
    control: 'input',
    type: 'text',
    label: 'Action',
    name: 'action'
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
    control: 'arraystringphoto',
    type: 'array',
    label: 'Image Square',
    name: 'img_square',
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

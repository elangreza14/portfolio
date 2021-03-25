// "title" : "test",
// "description" : "tes",
// "img" : ""

export const AddAnnouncementStructure = [
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
  }
]

// {
//     "title" : "Tes",
//     "img" : "",
//     "sort" : 4,
//     "action" : "https://www.youtube.com/watch?v=kRZSs3sv1yY"
// }

export const AddBannerStructure = [
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
  }
]

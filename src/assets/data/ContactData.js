import { GrTwitter, GrGithub, GrLinkedin } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'

export const ContactData = [
  {
    id: 1,
    name: 'Email',
    action: false,
    value: 'rezaelangerlangga14@gmail.com',
    icon: HiOutlineMail,
    link: 'rezaelangerlangga14@gmail.com'
  },
  {
    id: 2,
    name: 'Twitter',
    action: true,
    value: '@elangreza',
    icon: GrTwitter,
    link: 'https://twitter.com/elangreza'
  },
  {
    id: 3,
    name: 'Github',
    action: true,
    value: 'elangreza14',
    icon: GrGithub,
    link: 'https://github.com/elangreza14'
  },
  {
    id: 4,
    name: 'LinkedIn',
    action: true,
    value: 'Muhammad Reza Elang Erlangga',
    icon: GrLinkedin,
    link: 'https://id.linkedin.com/in/muhammad-reza-elang-erlangga-1b836715b'
  }
]

// import { LinkDataTranslate } from '../assets/data/LinkData'

import { LinkData } from '../assets/data/LinkData'

export const initialRole = {
  pages: LinkData,
  role: [28],
  roleId: null,
  auth: false
}

export const RoleReducer = (state, action) => {
  switch (action.type) {
    case 'BOOT':
      return state
    case 'INSERTROLE':
      return {
        ...state,
        pages: LinkData.map(x =>
          state.role.findIndex(y => y === x.id) !== -1
            ? { ...x, visibilty: false }
            : x
        ),
        role: action.currentRole,
        roleId: action.currentRole,
        auth: true
      }
    // case 'CHANGE_LANG':
    //   return {
    //     ...state,
    //     pages: LinkDataTranslate(action.lang).map(x =>
    //       state.role.findIndex(y => y === x.id) !== -1
    //         ? { ...x, visibilty: false }
    //         : x
    //     )
    //   }
    // case 'LOGOUT':
    //   return {
    //     ...state,
    //     pages: LinkDataTranslate(action.lang),
    //     role: null,
    //     roleId: null,
    //     auth: false
    //   }
    default:
      return state
  }
}

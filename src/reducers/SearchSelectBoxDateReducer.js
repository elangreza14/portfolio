// const SearchSelectBoxDateReducerinitial = {
//   page: 1,
//   length: 10,
//   select: '',
//   search: '',
//   start_date: ConvertDate(addDays(new Date(), -30)),
//   end_date: ConvertDate(new Date()),
//   status: ['unpaid', 'process']
// }

//commonly use for search, combo box, date range, and status api

export const SearchSelectBoxDateReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SELECT':
      return {
        ...state,
        select: action.add_select,
        page: 1,
        length: 10
      }
    case 'ADD_STATUS':
      return {
        ...state,
        status: [...state.status, action.add_status],
        page: 1,
        length: 10
      }
    case 'REMOVE_STATUS':
      return {
        ...state,
        status: state.status.filter(x => x !== action.remove_status),
        page: 1,
        length: 10
      }
    case 'ADD_TIPE':
      return {
        ...state,
        tipe: [...state.tipe, action.add_tipe],
        page: 1,
        length: 10
      }
    case 'REMOVE_TIPE':
      return {
        ...state,
        tipe: state.tipe.filter(x => x !== action.remove_tipe),
        page: 1,
        length: 10
      }
    case 'MODIFY_DATE':
      return {
        ...state,
        start_date: action.new_start_date,
        end_date: action.new_end_date
      }
    case 'HANDLE_SEARCH':
      return {
        ...state,
        page: 1,
        length: 10,
        search: action.search_val
      }
    case 'SET_PAGE':
      return {
        ...state,
        page: action.new_page
      }
    case 'SET_PER_PAGE':
      return {
        ...state,
        length: action.new_per_page
      }
    case 'DEFINE_ALL':
      return action.allstate
    default:
      return state
  }
}

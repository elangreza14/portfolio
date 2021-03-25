export const MutationReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        search: action.search_val,
        page: 1,
        length: 10
      }
    case 'CHANGE_SELECT':
      return {
        ...state,
        select: action.add_select,
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
    case 'DEFINE_BANK':
      return {
        ...state,
        bank: action.all_bank,
        page: 1,
        length: 10
      }
    case 'ADD_BANK':
      return {
        ...state,
        bank: [...state.bank, action.add_bank],
        page: 1,
        length: 10
      }
    case 'REMOVE_BANK':
      return {
        ...state,
        bank: state.bank.filter(x => x !== action.remove_bank),
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

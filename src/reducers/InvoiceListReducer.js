export const InvoiceListReducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

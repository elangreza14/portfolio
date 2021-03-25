export const SearchSelectRadioDateReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STATUS':
      return {
        ...state,
        status_single: action.add_status,
        page: 1,
        length: 10
      }
    case 'HANDLE_SEARCH':
      return {
        ...state,
        page: 1,
        length: 10,
        search: action.search_val
      }
    case 'MODIFY_DATE':
      return {
        ...state,
        start_date: action.new_start_date,
        end_date: action.new_end_date
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

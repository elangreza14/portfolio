export const initialStatePoTotal = {
  brand_id: 0,
  order_details_params: [],
  total: 0
}

export const PoTotalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        brand_id: action.brand_id,
        order_details_params: [...state.order_details_params, action.addItem],
        total: state.total + 1
      }
    case 'ADDALL':
      return {
        ...state,
        brand_id: action.brand_id,
        order_details_params: action.addAll,
        total: action.addAll.length
      }
    case 'REMOVEALL':
      return {
        ...state,
        brand_id: action.brand_id,
        order_details_params: [],
        total: 0
      }
    case 'DEC':
      return {
        ...state,
        // brand_id: action.brand_id,
        order_details_params: state.order_details_params.filter(
          x => x.order_detail[0] !== action.removeItem
        ),
        total: state.total - 1
      }
    case 'CHANGEBRAND':
      return {
        ...state,
        brand_id: 0,
        order_details_params: [],
        total: 0
      }
    default:
      return state
  }
}

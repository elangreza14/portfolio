import { addDays } from 'date-fns'
import { useReducer } from 'react'
import { createContainer } from 'react-tracked'
import { SearchSelectRadioDateReducer } from '../reducers'
import { ConvertDate } from '../utils'

const initialReturList = {
  page: 1,
  length: 10,
  search: '',
  start_date: ConvertDate(addDays(new Date(), -30)),
  end_date: ConvertDate(new Date()),
  status_single: 'process_return'
}

export const {
  Provider: ProviderRetur,
  useTrackedState: useStateRetur,
  useUpdate: useDispatchRetur
} = createContainer(() =>
  useReducer(SearchSelectRadioDateReducer, initialReturList)
)

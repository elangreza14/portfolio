import { AuthReducer } from './AuthReducer'
import { FetchingReducer, initialStateFetch } from './FetchingReducer'
import { MutationReducer } from './MutationReducer'
import { PoTotalReducer, initialStatePoTotal } from './PoTotalReducer'
import { initialRole, RoleReducer } from './RoleReducer'
import { SearchSelectBoxDateReducer } from './SearchSelectBoxDateReducer'
import { SearchSelectRadioDateReducer } from './SearchSelectRadioDateReducer'
import { ServiceReducer } from './ServiceReducer'

export {
  ServiceReducer,
  AuthReducer,
  FetchingReducer,
  initialStateFetch,
  RoleReducer,
  initialRole,
  PoTotalReducer,
  initialStatePoTotal,
  SearchSelectBoxDateReducer,
  SearchSelectRadioDateReducer
  , MutationReducer
}
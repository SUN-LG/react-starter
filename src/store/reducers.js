import {combineReducers} from 'redux'
import locationReducer from './location'

const makeRootReducer = asyncReducers => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers
  })
}

const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export {injectReducer}
export default makeRootReducer

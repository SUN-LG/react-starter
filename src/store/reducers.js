import {combineReducers} from 'redux'
import locationReducer from './location'

const makeRootReducer = asyncReducers => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers
  })
}

/**
 * 动态注入reducer
 * 如果reducer已经存在return返回，如果reducer不存在动态注入
 */
const injectReducer = (store, {key, reducer}) => {
  if (store.asyncReducers[key]) return
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export {injectReducer}
export default makeRootReducer

import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  //async getComponent
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default

      //
      injectReducer(store, {key: 'counter', reducer})
      //return component
      cb(null, Counter)

      //named bundle
    }, 'counter')
  }
})

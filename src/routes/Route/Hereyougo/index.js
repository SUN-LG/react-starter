export default {
  path: '/hereyougo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Hereyougo = require('./components/Hereyougo').default
      cb(null, Hereyougo)
    })
  }
}

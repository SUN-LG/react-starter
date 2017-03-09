import Hereyougo from './Hereyougo'

export default {
  path: 'route/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('./components/Route').default

      cb(null, Route)
    })
  },
  childRoutes: [
    Hereyougo
  ]
}

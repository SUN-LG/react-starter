import CoreLayout from '../layouts/CoreLayout'
import CounterRoute from './Counter'
import Home from './Home'
import ElapseRoute from './Elapse'
import ZenRoute from './Zen'

const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CounterRoute(store),
    ElapseRoute(store),
    ZenRoute(store)
  ]
})

export default createRoutes

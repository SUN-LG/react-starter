import CoreLayout from '../layouts/CoreLayout'
import CounterRoute from './Counter'
import Home from './Home'

const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CounterRoute(store)
  ]
})

export default createRoutes

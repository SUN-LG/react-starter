import CoreLayout from '../layouts/CoreLayout'
import CounterRoute from './Counter'
import Home from './Home'
import ElapseRoute from './Elapse'
import ZenRoute from './Zen'
import Route from './Route'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'

const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CounterRoute(store),
    ElapseRoute(store),
    ZenRoute(store),
    Route,
    PageNotFound,
    Redirect
  ]
})

export default createRoutes

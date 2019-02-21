// React hot loader.
import { hot } from 'react-hot-loader'

// Routes.
import routes from './routes'

// Redux reducers.
// (they will be combined into the
//  root Redux reducer via `combineReducers()`)
import * as reducers from './redux'

export default {
  routes,
  reducers,

  // When using `@preload()`s the website will show a spinner during the initial load.
  showPreloadInitially: true,

  // Enable `react-hot-loader`.
  hot
}
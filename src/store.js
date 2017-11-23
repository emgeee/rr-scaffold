import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'
import middleware, {sagaMiddleware} from './middleware'

import sagas from './sagas'

const dev = process.env.NODE_ENV !== 'production'

const store = createStore(
  reducers,
  dev ? composeWithDevTools(middleware) : middleware
)

sagaMiddleware.run(sagas)
export default store

export function print () {
  const state = store.getState()

  console.group('%cCurrent State')
  Object.keys(state).forEach(k => {
    console.log(k + ':', (state)[k])
  })
  console.groupEnd()
}

window.store = {
  print,
  dispatch: store.dispatch,
  get: store.getState
}

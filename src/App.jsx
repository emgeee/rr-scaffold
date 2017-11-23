import * as React from 'react'
import { Provider } from 'react-redux'

import './index.css'
import Home from './containers/Home'
import store from './store'

export default function App () {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
};

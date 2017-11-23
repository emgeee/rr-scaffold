import * as React from 'react'
import {connect} from 'react-redux'

import './Home.css'

class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default connect(state => ({
  // Slices of the state to watch
}), {
})(Home)

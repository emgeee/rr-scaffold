import * as React from 'react'
import {connect} from 'react-redux'

import './Home.css'

import * as actions from '../actions/todo'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {_text: ''}
    this.setItemText = this.setItemText.bind(this)
    this.addTodoItem = this.addTodoItem.bind(this)
  }

  setItemText (e) {
    const value = e.target.value
    this.setState({
      _text: value
    })
  }

  addTodoItem (e) {
    e.preventDefault()
    const text = this.state._text

    this.props.addTodoItem(text)
    this.setState({_text: ''})
  }

  render () {
    const {
      todos,
      onCheck
    } = this.props
    return (
      <div className='Home'>
        <h1>Todo</h1>
        <ul>
          {todos.map((t, idx) =>
            <CheckListItem key={idx}
              todo={t}
              idx={idx}
              onCheck={onCheck} />
            )}
        </ul>
        <form onSubmit={this.addTodoItem}>
          <input type='text' onChange={this.setItemText} value={this.state._text} />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default connect(state => ({
  // Slices of the state to watch
  todos: state.todos
}), {
  onCheck: actions.onCheck,
  addTodoItem: actions.addTodoItem
})(Home)

const CheckListItem = ({todo, idx, onCheck}) =>
  <li key={idx} className={todo.complete ? 'complete' : ''}>
    <label>
      <input type='checkbox'
        checked={todo.complete}
        onChange={onCheck.bind(null, idx)} />
      {todo.text}
    </label>
  </li>

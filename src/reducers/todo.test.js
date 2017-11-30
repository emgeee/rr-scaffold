
import reducer from './todo'

it('adds a todo item', () => {
  const action = {
    type: 'ADD_TODO',
    payload: 'Test TODO'
  }

  const newState = reducer(undefined, action)

  expect(newState).toContainEqual({
    text: action.payload,
    complete: false
  })
})

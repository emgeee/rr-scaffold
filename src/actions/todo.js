
export function onCheck (idx, event) {
  const target = event.target
  const value = target.type === 'checkbox' ? target.checked : target.value;
  console.log(idx, value)

  return {
    type: 'ON_CHECK',
    payload: {
      value,
      idx
    }
  }
}

export function addTodoItem (text) {
  return {
    type: 'ADD_TODO',
    payload: text
  }
}

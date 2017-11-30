const initialState = [
  {
    text: 'get milk',
    complete: false
  },
  {
    text: 'eggs',
    complete: false
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{
        text: action.payload,
        complete: false
      }])
    case 'ON_CHECK':
      return [...state].map((todo, idx) => {
        if (idx === action.payload.idx) {
          todo.complete = action.payload.value
        }

        return todo
      })


    default:
      return state;
  }
};

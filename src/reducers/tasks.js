const initialState = {
  tasks: [],
  input: ""
}

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task)
      };
    case 'INPUT_TASK':
      return {
        ...state,
        input: action.payload.input
      };
    default:
      return state;
  }
}

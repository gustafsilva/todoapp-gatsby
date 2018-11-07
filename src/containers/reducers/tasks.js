export default function tasks (state = [], action) {
  switch (action.type) {
  case 'ADD_TASK':
    return [
      ...state,
      {
        id: Math.random(),
        description: action.description,
        status: false
      }
    ]
  case 'CHANGE_TASK_STATUS':
    return state.map(task => {
      if (task.id === action.idTask) {
        task.status = !task.status
      }
      return task
    })
  default:
    return state
  }
}

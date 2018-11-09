/**
 * Reducer responsible for manipulating tasks data.
 * The supported actions are:
 *  - to add a task (ADD_TASK).
 *  - change the status of a task (CHANGE_TASK_STATUS).
 * @param {object} state - Current state.
 * @param {object} action - Action that must be taken.
 */
export default function tasks (state = [], action) {
  switch (action.type) {
  case 'ADD_TASK':
    if (action.description !== '') {
      return [
        ...state,
        {
          id: Math.random(),
          description: action.description,
          status: false
        }
      ]
    } else {
      return state
    }
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

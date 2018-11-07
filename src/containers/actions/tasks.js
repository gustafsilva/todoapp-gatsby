export function addTask (description) {
  return {
    type: 'ADD_TASK',
    description
  }
}

export function changeTaskStatus (idTask) {
  return {
    type: 'CHANGE_TASK_STATUS',
    idTask
  }
}

/**
 * Action responsible for adding a new task, according to the previous description.
 * @param {string} description - Description of the task.
 */
export function addTask (description) {
  return {
    type: 'ADD_TASK',
    description
  }
}

/**
 * Action responsible for changing the status of a task according to id of the past task.
 * @param {string} idTask - Task id that will change status.
 */
export function changeTaskStatus (idTask) {
  return {
    type: 'CHANGE_TASK_STATUS',
    idTask
  }
}

import * as actions from '../../../src/containers/actions/tasks'

describe('tasks actions', () => {
  it('ADD_TASK', () => {
    const description = 'make coffe'
    const expectedAction = {
      type: 'ADD_TASK',
      description
    }

    expect(actions.addTask(description)).toEqual(expectedAction)
  })

  it('CHANGE_TASK_STATUS', () => {
    const idTask = Math.random()
    const expectedAction = {
      type: 'CHANGE_TASK_STATUS',
      idTask
    }

    expect(actions.changeTaskStatus(idTask)).toEqual(expectedAction)
  })
})

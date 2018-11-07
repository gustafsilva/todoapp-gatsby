import reducer from '../../../src/containers/reducers/tasks'
import * as actions from '../../../src/containers/actions/tasks'

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    const initState = []

    expect(reducer(undefined, {})).toEqual(initState)
  })

  it('should handle ADD_TASK', () => {
    const initState = []
    let newTask = actions.addTask('make coffe')

    let test = reducer(initState, newTask)

    expect(test).toEqual([
      {
        ...test[0],
        description: 'make coffe',
        status: false
      }
    ])

    newTask = actions.addTask('make code')
    test = reducer(test, newTask)

    expect(test).toEqual([
      {
        ...test[0],
        description: 'make coffe',
        status: false
      },
      {
        ...test[1],
        description: 'make code',
        status: false
      }
    ])
  })

  it('should handle ADD_TASK void', () => {
    const initState = []
    const newTask = actions.addTask('')

    expect(reducer(initState, newTask)).toEqual([])
  })

  it('should handle CHANGE_TASK_STATUS', () => {
    const initState = [
      {
        id: Math.random(),
        description: 'make coffe',
        status: false
      },
      {
        id: Math.random(),
        description: 'make code',
        status: true
      },
      {
        id: Math.random(),
        description: 'learn test',
        status: false
      }
    ]
    const taskChange = initState[0]
    let changeState = actions.changeTaskStatus(taskChange.id)

    let expectedStore = initState
    expectedStore[0].status = !taskChange.status

    expect(reducer(initState, changeState)).toEqual(expectedStore)
  })

  it('should handle CHANGE_TASK_STATUS incorrect id task', () => {
    const initState = [
      {
        id: Math.random(),
        description: 'make coffe',
        status: false
      },
      {
        id: Math.random(),
        description: 'make code',
        status: true
      },
      {
        id: Math.random(),
        description: 'learn test',
        status: false
      }
    ]
    let changeState = actions.changeTaskStatus(Math.random())

    expect(reducer(initState, changeState)).toEqual(initState)
  })
})

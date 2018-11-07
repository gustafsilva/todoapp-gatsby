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
})

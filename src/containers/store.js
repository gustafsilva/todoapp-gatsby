import { createStore } from 'redux'

import reducers from './reducers'

/* Creating store (single data source) and linking created reducers, to manipulate the data. */
const store = createStore(reducers)

export default store

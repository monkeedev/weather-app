import { createStore } from 'redux';
import { rootReducer } from './reducers';

export const initialState = {
  data: {
    current: {},
    forecast: {}
  },
  search: ''
}

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
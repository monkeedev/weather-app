export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT':
      return {
        ...state,
        data: { ...state.data, current: payload }
      }; 

    case 'SET_FORECAST':
      return {
        ...state,
        data: { ...state.data, forecast: payload }
      }; 

    case 'HANDLE_SEARCH':
      return {
        ...state,
        search: payload
      }

    default: 
      return { 
        ...state 
      };
  }
}
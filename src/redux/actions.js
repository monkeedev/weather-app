export const setCurrent = payload => {
  return { 
    type: 'SET_CURRENT',
    payload
  }
};

export const setForecast = payload => {
  return { 
    type: 'SET_FORECAST',
    payload
  }
};

export const handleSearch = payload => {
  return {
    type: 'HANDLE_SEARCH',
    payload
  }
}